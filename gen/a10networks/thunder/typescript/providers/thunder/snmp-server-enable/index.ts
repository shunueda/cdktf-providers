// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#id SnmpServerEnable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable SNMP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service SnmpServerEnable#service}
  */
  readonly service?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * traps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#traps SnmpServerEnable#traps}
  */
  readonly traps?: SnmpServerEnableTraps;
}
export interface SnmpServerEnableTrapsGslb {
  /**
  * Enable all GSLB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable GSLB group related traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#group SnmpServerEnable#group}
  */
  readonly group?: number;
  /**
  * Enable GSLB service-ip related traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_ip SnmpServerEnable#service_ip}
  */
  readonly serviceIp?: number;
  /**
  * Enable GSLB site related traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#site SnmpServerEnable#site}
  */
  readonly site?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable GSLB zone related traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#zone SnmpServerEnable#zone}
  */
  readonly zone?: number;
}

export function snmpServerEnableTrapsGslbToTerraform(struct?: SnmpServerEnableTrapsGslbOutputReference | SnmpServerEnableTrapsGslb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    group: cdktf.numberToTerraform(struct!.group),
    service_ip: cdktf.numberToTerraform(struct!.serviceIp),
    site: cdktf.numberToTerraform(struct!.site),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone: cdktf.numberToTerraform(struct!.zone),
  }
}


export function snmpServerEnableTrapsGslbToHclTerraform(struct?: SnmpServerEnableTrapsGslbOutputReference | SnmpServerEnableTrapsGslb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_ip: {
      value: cdktf.numberToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site: {
      value: cdktf.numberToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.numberToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsGslbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsGslb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsGslb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._group = undefined;
      this._serviceIp = undefined;
      this._site = undefined;
      this._uuid = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._group = value.group;
      this._serviceIp = value.serviceIp;
      this._site = value.site;
      this._uuid = value.uuid;
      this._zone = value.zone;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: number; 
  public get serviceIp() {
    return this.getNumberAttribute('service_ip');
  }
  public set serviceIp(value: number) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // site - computed: false, optional: true, required: false
  private _site?: number; 
  public get site() {
    return this.getNumberAttribute('site');
  }
  public set site(value: number) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface SnmpServerEnableTrapsLsn {
  /**
  * Enable all LSN group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable LSN trap when fixed nat port mapping file change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#fixed_nat_port_mapping_file_change SnmpServerEnable#fixed_nat_port_mapping_file_change}
  */
  readonly fixedNatPortMappingFileChange?: number;
  /**
  * Maximum threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#max_ipport_threshold SnmpServerEnable#max_ipport_threshold}
  */
  readonly maxIpportThreshold?: number;
  /**
  * Maximum threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#max_port_threshold SnmpServerEnable#max_port_threshold}
  */
  readonly maxPortThreshold?: number;
  /**
  * Enable LSN trap when IP total port usage reaches the threshold (default 64512)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#per_ip_port_usage_threshold SnmpServerEnable#per_ip_port_usage_threshold}
  */
  readonly perIpPortUsageThreshold?: number;
  /**
  * Enable LSN trap when NAT total port usage reaches the threshold (default 655350000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#total_port_usage_threshold SnmpServerEnable#total_port_usage_threshold}
  */
  readonly totalPortUsageThreshold?: number;
  /**
  * Enable LSN trap when NAT pool reaches the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#traffic_exceeded SnmpServerEnable#traffic_exceeded}
  */
  readonly trafficExceeded?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsLsnToTerraform(struct?: SnmpServerEnableTrapsLsnOutputReference | SnmpServerEnableTrapsLsn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    fixed_nat_port_mapping_file_change: cdktf.numberToTerraform(struct!.fixedNatPortMappingFileChange),
    max_ipport_threshold: cdktf.numberToTerraform(struct!.maxIpportThreshold),
    max_port_threshold: cdktf.numberToTerraform(struct!.maxPortThreshold),
    per_ip_port_usage_threshold: cdktf.numberToTerraform(struct!.perIpPortUsageThreshold),
    total_port_usage_threshold: cdktf.numberToTerraform(struct!.totalPortUsageThreshold),
    traffic_exceeded: cdktf.numberToTerraform(struct!.trafficExceeded),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsLsnToHclTerraform(struct?: SnmpServerEnableTrapsLsnOutputReference | SnmpServerEnableTrapsLsn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_port_mapping_file_change: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatPortMappingFileChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ipport_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxIpportThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_port_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxPortThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ip_port_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.perIpPortUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_port_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.totalPortUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.trafficExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsLsnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsLsn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._fixedNatPortMappingFileChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatPortMappingFileChange = this._fixedNatPortMappingFileChange;
    }
    if (this._maxIpportThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpportThreshold = this._maxIpportThreshold;
    }
    if (this._maxPortThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPortThreshold = this._maxPortThreshold;
    }
    if (this._perIpPortUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.perIpPortUsageThreshold = this._perIpPortUsageThreshold;
    }
    if (this._totalPortUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPortUsageThreshold = this._totalPortUsageThreshold;
    }
    if (this._trafficExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficExceeded = this._trafficExceeded;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsLsn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._fixedNatPortMappingFileChange = undefined;
      this._maxIpportThreshold = undefined;
      this._maxPortThreshold = undefined;
      this._perIpPortUsageThreshold = undefined;
      this._totalPortUsageThreshold = undefined;
      this._trafficExceeded = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._fixedNatPortMappingFileChange = value.fixedNatPortMappingFileChange;
      this._maxIpportThreshold = value.maxIpportThreshold;
      this._maxPortThreshold = value.maxPortThreshold;
      this._perIpPortUsageThreshold = value.perIpPortUsageThreshold;
      this._totalPortUsageThreshold = value.totalPortUsageThreshold;
      this._trafficExceeded = value.trafficExceeded;
      this._uuid = value.uuid;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // fixed_nat_port_mapping_file_change - computed: false, optional: true, required: false
  private _fixedNatPortMappingFileChange?: number; 
  public get fixedNatPortMappingFileChange() {
    return this.getNumberAttribute('fixed_nat_port_mapping_file_change');
  }
  public set fixedNatPortMappingFileChange(value: number) {
    this._fixedNatPortMappingFileChange = value;
  }
  public resetFixedNatPortMappingFileChange() {
    this._fixedNatPortMappingFileChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatPortMappingFileChangeInput() {
    return this._fixedNatPortMappingFileChange;
  }

  // max_ipport_threshold - computed: false, optional: true, required: false
  private _maxIpportThreshold?: number; 
  public get maxIpportThreshold() {
    return this.getNumberAttribute('max_ipport_threshold');
  }
  public set maxIpportThreshold(value: number) {
    this._maxIpportThreshold = value;
  }
  public resetMaxIpportThreshold() {
    this._maxIpportThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpportThresholdInput() {
    return this._maxIpportThreshold;
  }

  // max_port_threshold - computed: false, optional: true, required: false
  private _maxPortThreshold?: number; 
  public get maxPortThreshold() {
    return this.getNumberAttribute('max_port_threshold');
  }
  public set maxPortThreshold(value: number) {
    this._maxPortThreshold = value;
  }
  public resetMaxPortThreshold() {
    this._maxPortThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortThresholdInput() {
    return this._maxPortThreshold;
  }

  // per_ip_port_usage_threshold - computed: false, optional: true, required: false
  private _perIpPortUsageThreshold?: number; 
  public get perIpPortUsageThreshold() {
    return this.getNumberAttribute('per_ip_port_usage_threshold');
  }
  public set perIpPortUsageThreshold(value: number) {
    this._perIpPortUsageThreshold = value;
  }
  public resetPerIpPortUsageThreshold() {
    this._perIpPortUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpPortUsageThresholdInput() {
    return this._perIpPortUsageThreshold;
  }

  // total_port_usage_threshold - computed: false, optional: true, required: false
  private _totalPortUsageThreshold?: number; 
  public get totalPortUsageThreshold() {
    return this.getNumberAttribute('total_port_usage_threshold');
  }
  public set totalPortUsageThreshold(value: number) {
    this._totalPortUsageThreshold = value;
  }
  public resetTotalPortUsageThreshold() {
    this._totalPortUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPortUsageThresholdInput() {
    return this._totalPortUsageThreshold;
  }

  // traffic_exceeded - computed: false, optional: true, required: false
  private _trafficExceeded?: number; 
  public get trafficExceeded() {
    return this.getNumberAttribute('traffic_exceeded');
  }
  public set trafficExceeded(value: number) {
    this._trafficExceeded = value;
  }
  public resetTrafficExceeded() {
    this._trafficExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficExceededInput() {
    return this._trafficExceeded;
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
}
export interface SnmpServerEnableTrapsNetwork {
  /**
  * Enable network trunk-port-threshold trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#trunk_port_threshold SnmpServerEnable#trunk_port_threshold}
  */
  readonly trunkPortThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsNetworkToTerraform(struct?: SnmpServerEnableTrapsNetworkOutputReference | SnmpServerEnableTrapsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk_port_threshold: cdktf.numberToTerraform(struct!.trunkPortThreshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsNetworkToHclTerraform(struct?: SnmpServerEnableTrapsNetworkOutputReference | SnmpServerEnableTrapsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk_port_threshold: {
      value: cdktf.numberToHclTerraform(struct!.trunkPortThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunkPortThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkPortThreshold = this._trunkPortThreshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trunkPortThreshold = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trunkPortThreshold = value.trunkPortThreshold;
      this._uuid = value.uuid;
    }
  }

  // trunk_port_threshold - computed: false, optional: true, required: false
  private _trunkPortThreshold?: number; 
  public get trunkPortThreshold() {
    return this.getNumberAttribute('trunk_port_threshold');
  }
  public set trunkPortThreshold(value: number) {
    this._trunkPortThreshold = value;
  }
  public resetTrunkPortThreshold() {
    this._trunkPortThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkPortThresholdInput() {
    return this._trunkPortThreshold;
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
}
export interface SnmpServerEnableTrapsRoutingBgpAx {
  /**
  * Enable bgpBackwardTransNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgpbackwardtransnotification SnmpServerEnable#bgpbackwardtransnotification}
  */
  readonly bgpbackwardtransnotification?: number;
  /**
  * Enable bgpEstablishedNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgpestablishednotification SnmpServerEnable#bgpestablishednotification}
  */
  readonly bgpestablishednotification?: number;
  /**
  * Enable bgpPrefixThresholdClearNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgpprefixthresholdclearnotification SnmpServerEnable#bgpprefixthresholdclearnotification}
  */
  readonly bgpprefixthresholdclearnotification?: number;
  /**
  * Enable bgpPrefixThresholdExceededNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgpprefixthresholdexceedednotification SnmpServerEnable#bgpprefixthresholdexceedednotification}
  */
  readonly bgpprefixthresholdexceedednotification?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsRoutingBgpAxToTerraform(struct?: SnmpServerEnableTrapsRoutingBgpAxOutputReference | SnmpServerEnableTrapsRoutingBgpAx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgpbackwardtransnotification: cdktf.numberToTerraform(struct!.bgpbackwardtransnotification),
    bgpestablishednotification: cdktf.numberToTerraform(struct!.bgpestablishednotification),
    bgpprefixthresholdclearnotification: cdktf.numberToTerraform(struct!.bgpprefixthresholdclearnotification),
    bgpprefixthresholdexceedednotification: cdktf.numberToTerraform(struct!.bgpprefixthresholdexceedednotification),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsRoutingBgpAxToHclTerraform(struct?: SnmpServerEnableTrapsRoutingBgpAxOutputReference | SnmpServerEnableTrapsRoutingBgpAx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgpbackwardtransnotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpbackwardtransnotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpestablishednotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpestablishednotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpprefixthresholdclearnotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpprefixthresholdclearnotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpprefixthresholdexceedednotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpprefixthresholdexceedednotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsRoutingBgpAxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsRoutingBgpAx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpbackwardtransnotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpbackwardtransnotification = this._bgpbackwardtransnotification;
    }
    if (this._bgpestablishednotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpestablishednotification = this._bgpestablishednotification;
    }
    if (this._bgpprefixthresholdclearnotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpprefixthresholdclearnotification = this._bgpprefixthresholdclearnotification;
    }
    if (this._bgpprefixthresholdexceedednotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpprefixthresholdexceedednotification = this._bgpprefixthresholdexceedednotification;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsRoutingBgpAx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpbackwardtransnotification = undefined;
      this._bgpestablishednotification = undefined;
      this._bgpprefixthresholdclearnotification = undefined;
      this._bgpprefixthresholdexceedednotification = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpbackwardtransnotification = value.bgpbackwardtransnotification;
      this._bgpestablishednotification = value.bgpestablishednotification;
      this._bgpprefixthresholdclearnotification = value.bgpprefixthresholdclearnotification;
      this._bgpprefixthresholdexceedednotification = value.bgpprefixthresholdexceedednotification;
      this._uuid = value.uuid;
    }
  }

  // bgpbackwardtransnotification - computed: false, optional: true, required: false
  private _bgpbackwardtransnotification?: number; 
  public get bgpbackwardtransnotification() {
    return this.getNumberAttribute('bgpbackwardtransnotification');
  }
  public set bgpbackwardtransnotification(value: number) {
    this._bgpbackwardtransnotification = value;
  }
  public resetBgpbackwardtransnotification() {
    this._bgpbackwardtransnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpbackwardtransnotificationInput() {
    return this._bgpbackwardtransnotification;
  }

  // bgpestablishednotification - computed: false, optional: true, required: false
  private _bgpestablishednotification?: number; 
  public get bgpestablishednotification() {
    return this.getNumberAttribute('bgpestablishednotification');
  }
  public set bgpestablishednotification(value: number) {
    this._bgpestablishednotification = value;
  }
  public resetBgpestablishednotification() {
    this._bgpestablishednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpestablishednotificationInput() {
    return this._bgpestablishednotification;
  }

  // bgpprefixthresholdclearnotification - computed: false, optional: true, required: false
  private _bgpprefixthresholdclearnotification?: number; 
  public get bgpprefixthresholdclearnotification() {
    return this.getNumberAttribute('bgpprefixthresholdclearnotification');
  }
  public set bgpprefixthresholdclearnotification(value: number) {
    this._bgpprefixthresholdclearnotification = value;
  }
  public resetBgpprefixthresholdclearnotification() {
    this._bgpprefixthresholdclearnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpprefixthresholdclearnotificationInput() {
    return this._bgpprefixthresholdclearnotification;
  }

  // bgpprefixthresholdexceedednotification - computed: false, optional: true, required: false
  private _bgpprefixthresholdexceedednotification?: number; 
  public get bgpprefixthresholdexceedednotification() {
    return this.getNumberAttribute('bgpprefixthresholdexceedednotification');
  }
  public set bgpprefixthresholdexceedednotification(value: number) {
    this._bgpprefixthresholdexceedednotification = value;
  }
  public resetBgpprefixthresholdexceedednotification() {
    this._bgpprefixthresholdexceedednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpprefixthresholdexceedednotificationInput() {
    return this._bgpprefixthresholdexceedednotification;
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
}
export interface SnmpServerEnableTrapsRoutingBgp {
  /**
  * Enable bgpBackwardTransNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgpbackwardtransnotification SnmpServerEnable#bgpbackwardtransnotification}
  */
  readonly bgpbackwardtransnotification?: number;
  /**
  * Enable bgpEstablishedNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgpestablishednotification SnmpServerEnable#bgpestablishednotification}
  */
  readonly bgpestablishednotification?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * ax block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ax SnmpServerEnable#ax}
  */
  readonly ax?: SnmpServerEnableTrapsRoutingBgpAx;
}

export function snmpServerEnableTrapsRoutingBgpToTerraform(struct?: SnmpServerEnableTrapsRoutingBgpOutputReference | SnmpServerEnableTrapsRoutingBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgpbackwardtransnotification: cdktf.numberToTerraform(struct!.bgpbackwardtransnotification),
    bgpestablishednotification: cdktf.numberToTerraform(struct!.bgpestablishednotification),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ax: snmpServerEnableTrapsRoutingBgpAxToTerraform(struct!.ax),
  }
}


export function snmpServerEnableTrapsRoutingBgpToHclTerraform(struct?: SnmpServerEnableTrapsRoutingBgpOutputReference | SnmpServerEnableTrapsRoutingBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgpbackwardtransnotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpbackwardtransnotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpestablishednotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpestablishednotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ax: {
      value: snmpServerEnableTrapsRoutingBgpAxToHclTerraform(struct!.ax),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsRoutingBgpAxList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsRoutingBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsRoutingBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpbackwardtransnotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpbackwardtransnotification = this._bgpbackwardtransnotification;
    }
    if (this._bgpestablishednotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpestablishednotification = this._bgpestablishednotification;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ax?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ax = this._ax?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsRoutingBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpbackwardtransnotification = undefined;
      this._bgpestablishednotification = undefined;
      this._uuid = undefined;
      this._ax.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpbackwardtransnotification = value.bgpbackwardtransnotification;
      this._bgpestablishednotification = value.bgpestablishednotification;
      this._uuid = value.uuid;
      this._ax.internalValue = value.ax;
    }
  }

  // bgpbackwardtransnotification - computed: false, optional: true, required: false
  private _bgpbackwardtransnotification?: number; 
  public get bgpbackwardtransnotification() {
    return this.getNumberAttribute('bgpbackwardtransnotification');
  }
  public set bgpbackwardtransnotification(value: number) {
    this._bgpbackwardtransnotification = value;
  }
  public resetBgpbackwardtransnotification() {
    this._bgpbackwardtransnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpbackwardtransnotificationInput() {
    return this._bgpbackwardtransnotification;
  }

  // bgpestablishednotification - computed: false, optional: true, required: false
  private _bgpestablishednotification?: number; 
  public get bgpestablishednotification() {
    return this.getNumberAttribute('bgpestablishednotification');
  }
  public set bgpestablishednotification(value: number) {
    this._bgpestablishednotification = value;
  }
  public resetBgpestablishednotification() {
    this._bgpestablishednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpestablishednotificationInput() {
    return this._bgpestablishednotification;
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

  // ax - computed: false, optional: true, required: false
  private _ax = new SnmpServerEnableTrapsRoutingBgpAxOutputReference(this, "ax");
  public get ax() {
    return this._ax;
  }
  public putAx(value: SnmpServerEnableTrapsRoutingBgpAx) {
    this._ax.internalValue = value;
  }
  public resetAx() {
    this._ax.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axInput() {
    return this._ax.internalValue;
  }
}
export interface SnmpServerEnableTrapsRoutingIsis {
  /**
  * Enable isisAdjacencyChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisadjacencychange SnmpServerEnable#isisadjacencychange}
  */
  readonly isisadjacencychange?: number;
  /**
  * Enable isisAreaMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisareamismatch SnmpServerEnable#isisareamismatch}
  */
  readonly isisareamismatch?: number;
  /**
  * Enable isisAttemptToExceedMaxSequence traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisattempttoexceedmaxsequence SnmpServerEnable#isisattempttoexceedmaxsequence}
  */
  readonly isisattempttoexceedmaxsequence?: number;
  /**
  * Enable isisAuthenticationFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisauthenticationfailure SnmpServerEnable#isisauthenticationfailure}
  */
  readonly isisauthenticationfailure?: number;
  /**
  * Enable isisAuthenticationTypeFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisauthenticationtypefailure SnmpServerEnable#isisauthenticationtypefailure}
  */
  readonly isisauthenticationtypefailure?: number;
  /**
  * Enable isisCorruptedLSPDetected traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isiscorruptedlspdetected SnmpServerEnable#isiscorruptedlspdetected}
  */
  readonly isiscorruptedlspdetected?: number;
  /**
  * Enable isisDatabaseOverload traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisdatabaseoverload SnmpServerEnable#isisdatabaseoverload}
  */
  readonly isisdatabaseoverload?: number;
  /**
  * Enable isisIDLenMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisidlenmismatch SnmpServerEnable#isisidlenmismatch}
  */
  readonly isisidlenmismatch?: number;
  /**
  * Enable isisLSPErrorDetected traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isislsperrordetected SnmpServerEnable#isislsperrordetected}
  */
  readonly isislsperrordetected?: number;
  /**
  * Enable isisLSPTooLargeToPropagate traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isislsptoolargetopropagate SnmpServerEnable#isislsptoolargetopropagate}
  */
  readonly isislsptoolargetopropagate?: number;
  /**
  * Enable isisManualAddressDrops traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isismanualaddressdrops SnmpServerEnable#isismanualaddressdrops}
  */
  readonly isismanualaddressdrops?: number;
  /**
  * Enable isisMaxAreaAddressesMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isismaxareaaddressesmismatch SnmpServerEnable#isismaxareaaddressesmismatch}
  */
  readonly isismaxareaaddressesmismatch?: number;
  /**
  * Enable isisOriginatingLSPBufferSizeMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisoriginatinglspbuffersizemismatch SnmpServerEnable#isisoriginatinglspbuffersizemismatch}
  */
  readonly isisoriginatinglspbuffersizemismatch?: number;
  /**
  * Enable isisOwnLSPPurge traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisownlsppurge SnmpServerEnable#isisownlsppurge}
  */
  readonly isisownlsppurge?: number;
  /**
  * Enable isisProtocolsSupportedMismatch traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisprotocolssupportedmismatch SnmpServerEnable#isisprotocolssupportedmismatch}
  */
  readonly isisprotocolssupportedmismatch?: number;
  /**
  * Enable isisRejectedAdjacency traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisrejectedadjacency SnmpServerEnable#isisrejectedadjacency}
  */
  readonly isisrejectedadjacency?: number;
  /**
  * Enable isisSequenceNumberSkip traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isissequencenumberskip SnmpServerEnable#isissequencenumberskip}
  */
  readonly isissequencenumberskip?: number;
  /**
  * Enable isisVersionSkew traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isisversionskew SnmpServerEnable#isisversionskew}
  */
  readonly isisversionskew?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsRoutingIsisToTerraform(struct?: SnmpServerEnableTrapsRoutingIsisOutputReference | SnmpServerEnableTrapsRoutingIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isisadjacencychange: cdktf.numberToTerraform(struct!.isisadjacencychange),
    isisareamismatch: cdktf.numberToTerraform(struct!.isisareamismatch),
    isisattempttoexceedmaxsequence: cdktf.numberToTerraform(struct!.isisattempttoexceedmaxsequence),
    isisauthenticationfailure: cdktf.numberToTerraform(struct!.isisauthenticationfailure),
    isisauthenticationtypefailure: cdktf.numberToTerraform(struct!.isisauthenticationtypefailure),
    isiscorruptedlspdetected: cdktf.numberToTerraform(struct!.isiscorruptedlspdetected),
    isisdatabaseoverload: cdktf.numberToTerraform(struct!.isisdatabaseoverload),
    isisidlenmismatch: cdktf.numberToTerraform(struct!.isisidlenmismatch),
    isislsperrordetected: cdktf.numberToTerraform(struct!.isislsperrordetected),
    isislsptoolargetopropagate: cdktf.numberToTerraform(struct!.isislsptoolargetopropagate),
    isismanualaddressdrops: cdktf.numberToTerraform(struct!.isismanualaddressdrops),
    isismaxareaaddressesmismatch: cdktf.numberToTerraform(struct!.isismaxareaaddressesmismatch),
    isisoriginatinglspbuffersizemismatch: cdktf.numberToTerraform(struct!.isisoriginatinglspbuffersizemismatch),
    isisownlsppurge: cdktf.numberToTerraform(struct!.isisownlsppurge),
    isisprotocolssupportedmismatch: cdktf.numberToTerraform(struct!.isisprotocolssupportedmismatch),
    isisrejectedadjacency: cdktf.numberToTerraform(struct!.isisrejectedadjacency),
    isissequencenumberskip: cdktf.numberToTerraform(struct!.isissequencenumberskip),
    isisversionskew: cdktf.numberToTerraform(struct!.isisversionskew),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsRoutingIsisToHclTerraform(struct?: SnmpServerEnableTrapsRoutingIsisOutputReference | SnmpServerEnableTrapsRoutingIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isisadjacencychange: {
      value: cdktf.numberToHclTerraform(struct!.isisadjacencychange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisareamismatch: {
      value: cdktf.numberToHclTerraform(struct!.isisareamismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisattempttoexceedmaxsequence: {
      value: cdktf.numberToHclTerraform(struct!.isisattempttoexceedmaxsequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisauthenticationfailure: {
      value: cdktf.numberToHclTerraform(struct!.isisauthenticationfailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisauthenticationtypefailure: {
      value: cdktf.numberToHclTerraform(struct!.isisauthenticationtypefailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isiscorruptedlspdetected: {
      value: cdktf.numberToHclTerraform(struct!.isiscorruptedlspdetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisdatabaseoverload: {
      value: cdktf.numberToHclTerraform(struct!.isisdatabaseoverload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisidlenmismatch: {
      value: cdktf.numberToHclTerraform(struct!.isisidlenmismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isislsperrordetected: {
      value: cdktf.numberToHclTerraform(struct!.isislsperrordetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isislsptoolargetopropagate: {
      value: cdktf.numberToHclTerraform(struct!.isislsptoolargetopropagate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isismanualaddressdrops: {
      value: cdktf.numberToHclTerraform(struct!.isismanualaddressdrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isismaxareaaddressesmismatch: {
      value: cdktf.numberToHclTerraform(struct!.isismaxareaaddressesmismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisoriginatinglspbuffersizemismatch: {
      value: cdktf.numberToHclTerraform(struct!.isisoriginatinglspbuffersizemismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisownlsppurge: {
      value: cdktf.numberToHclTerraform(struct!.isisownlsppurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisprotocolssupportedmismatch: {
      value: cdktf.numberToHclTerraform(struct!.isisprotocolssupportedmismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisrejectedadjacency: {
      value: cdktf.numberToHclTerraform(struct!.isisrejectedadjacency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isissequencenumberskip: {
      value: cdktf.numberToHclTerraform(struct!.isissequencenumberskip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isisversionskew: {
      value: cdktf.numberToHclTerraform(struct!.isisversionskew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsRoutingIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsRoutingIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isisadjacencychange !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisadjacencychange = this._isisadjacencychange;
    }
    if (this._isisareamismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisareamismatch = this._isisareamismatch;
    }
    if (this._isisattempttoexceedmaxsequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisattempttoexceedmaxsequence = this._isisattempttoexceedmaxsequence;
    }
    if (this._isisauthenticationfailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisauthenticationfailure = this._isisauthenticationfailure;
    }
    if (this._isisauthenticationtypefailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisauthenticationtypefailure = this._isisauthenticationtypefailure;
    }
    if (this._isiscorruptedlspdetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isiscorruptedlspdetected = this._isiscorruptedlspdetected;
    }
    if (this._isisdatabaseoverload !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisdatabaseoverload = this._isisdatabaseoverload;
    }
    if (this._isisidlenmismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisidlenmismatch = this._isisidlenmismatch;
    }
    if (this._isislsperrordetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isislsperrordetected = this._isislsperrordetected;
    }
    if (this._isislsptoolargetopropagate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isislsptoolargetopropagate = this._isislsptoolargetopropagate;
    }
    if (this._isismanualaddressdrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.isismanualaddressdrops = this._isismanualaddressdrops;
    }
    if (this._isismaxareaaddressesmismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.isismaxareaaddressesmismatch = this._isismaxareaaddressesmismatch;
    }
    if (this._isisoriginatinglspbuffersizemismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisoriginatinglspbuffersizemismatch = this._isisoriginatinglspbuffersizemismatch;
    }
    if (this._isisownlsppurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisownlsppurge = this._isisownlsppurge;
    }
    if (this._isisprotocolssupportedmismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisprotocolssupportedmismatch = this._isisprotocolssupportedmismatch;
    }
    if (this._isisrejectedadjacency !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisrejectedadjacency = this._isisrejectedadjacency;
    }
    if (this._isissequencenumberskip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isissequencenumberskip = this._isissequencenumberskip;
    }
    if (this._isisversionskew !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisversionskew = this._isisversionskew;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsRoutingIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isisadjacencychange = undefined;
      this._isisareamismatch = undefined;
      this._isisattempttoexceedmaxsequence = undefined;
      this._isisauthenticationfailure = undefined;
      this._isisauthenticationtypefailure = undefined;
      this._isiscorruptedlspdetected = undefined;
      this._isisdatabaseoverload = undefined;
      this._isisidlenmismatch = undefined;
      this._isislsperrordetected = undefined;
      this._isislsptoolargetopropagate = undefined;
      this._isismanualaddressdrops = undefined;
      this._isismaxareaaddressesmismatch = undefined;
      this._isisoriginatinglspbuffersizemismatch = undefined;
      this._isisownlsppurge = undefined;
      this._isisprotocolssupportedmismatch = undefined;
      this._isisrejectedadjacency = undefined;
      this._isissequencenumberskip = undefined;
      this._isisversionskew = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isisadjacencychange = value.isisadjacencychange;
      this._isisareamismatch = value.isisareamismatch;
      this._isisattempttoexceedmaxsequence = value.isisattempttoexceedmaxsequence;
      this._isisauthenticationfailure = value.isisauthenticationfailure;
      this._isisauthenticationtypefailure = value.isisauthenticationtypefailure;
      this._isiscorruptedlspdetected = value.isiscorruptedlspdetected;
      this._isisdatabaseoverload = value.isisdatabaseoverload;
      this._isisidlenmismatch = value.isisidlenmismatch;
      this._isislsperrordetected = value.isislsperrordetected;
      this._isislsptoolargetopropagate = value.isislsptoolargetopropagate;
      this._isismanualaddressdrops = value.isismanualaddressdrops;
      this._isismaxareaaddressesmismatch = value.isismaxareaaddressesmismatch;
      this._isisoriginatinglspbuffersizemismatch = value.isisoriginatinglspbuffersizemismatch;
      this._isisownlsppurge = value.isisownlsppurge;
      this._isisprotocolssupportedmismatch = value.isisprotocolssupportedmismatch;
      this._isisrejectedadjacency = value.isisrejectedadjacency;
      this._isissequencenumberskip = value.isissequencenumberskip;
      this._isisversionskew = value.isisversionskew;
      this._uuid = value.uuid;
    }
  }

  // isisadjacencychange - computed: false, optional: true, required: false
  private _isisadjacencychange?: number; 
  public get isisadjacencychange() {
    return this.getNumberAttribute('isisadjacencychange');
  }
  public set isisadjacencychange(value: number) {
    this._isisadjacencychange = value;
  }
  public resetIsisadjacencychange() {
    this._isisadjacencychange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisadjacencychangeInput() {
    return this._isisadjacencychange;
  }

  // isisareamismatch - computed: false, optional: true, required: false
  private _isisareamismatch?: number; 
  public get isisareamismatch() {
    return this.getNumberAttribute('isisareamismatch');
  }
  public set isisareamismatch(value: number) {
    this._isisareamismatch = value;
  }
  public resetIsisareamismatch() {
    this._isisareamismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisareamismatchInput() {
    return this._isisareamismatch;
  }

  // isisattempttoexceedmaxsequence - computed: false, optional: true, required: false
  private _isisattempttoexceedmaxsequence?: number; 
  public get isisattempttoexceedmaxsequence() {
    return this.getNumberAttribute('isisattempttoexceedmaxsequence');
  }
  public set isisattempttoexceedmaxsequence(value: number) {
    this._isisattempttoexceedmaxsequence = value;
  }
  public resetIsisattempttoexceedmaxsequence() {
    this._isisattempttoexceedmaxsequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisattempttoexceedmaxsequenceInput() {
    return this._isisattempttoexceedmaxsequence;
  }

  // isisauthenticationfailure - computed: false, optional: true, required: false
  private _isisauthenticationfailure?: number; 
  public get isisauthenticationfailure() {
    return this.getNumberAttribute('isisauthenticationfailure');
  }
  public set isisauthenticationfailure(value: number) {
    this._isisauthenticationfailure = value;
  }
  public resetIsisauthenticationfailure() {
    this._isisauthenticationfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisauthenticationfailureInput() {
    return this._isisauthenticationfailure;
  }

  // isisauthenticationtypefailure - computed: false, optional: true, required: false
  private _isisauthenticationtypefailure?: number; 
  public get isisauthenticationtypefailure() {
    return this.getNumberAttribute('isisauthenticationtypefailure');
  }
  public set isisauthenticationtypefailure(value: number) {
    this._isisauthenticationtypefailure = value;
  }
  public resetIsisauthenticationtypefailure() {
    this._isisauthenticationtypefailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisauthenticationtypefailureInput() {
    return this._isisauthenticationtypefailure;
  }

  // isiscorruptedlspdetected - computed: false, optional: true, required: false
  private _isiscorruptedlspdetected?: number; 
  public get isiscorruptedlspdetected() {
    return this.getNumberAttribute('isiscorruptedlspdetected');
  }
  public set isiscorruptedlspdetected(value: number) {
    this._isiscorruptedlspdetected = value;
  }
  public resetIsiscorruptedlspdetected() {
    this._isiscorruptedlspdetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isiscorruptedlspdetectedInput() {
    return this._isiscorruptedlspdetected;
  }

  // isisdatabaseoverload - computed: false, optional: true, required: false
  private _isisdatabaseoverload?: number; 
  public get isisdatabaseoverload() {
    return this.getNumberAttribute('isisdatabaseoverload');
  }
  public set isisdatabaseoverload(value: number) {
    this._isisdatabaseoverload = value;
  }
  public resetIsisdatabaseoverload() {
    this._isisdatabaseoverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisdatabaseoverloadInput() {
    return this._isisdatabaseoverload;
  }

  // isisidlenmismatch - computed: false, optional: true, required: false
  private _isisidlenmismatch?: number; 
  public get isisidlenmismatch() {
    return this.getNumberAttribute('isisidlenmismatch');
  }
  public set isisidlenmismatch(value: number) {
    this._isisidlenmismatch = value;
  }
  public resetIsisidlenmismatch() {
    this._isisidlenmismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisidlenmismatchInput() {
    return this._isisidlenmismatch;
  }

  // isislsperrordetected - computed: false, optional: true, required: false
  private _isislsperrordetected?: number; 
  public get isislsperrordetected() {
    return this.getNumberAttribute('isislsperrordetected');
  }
  public set isislsperrordetected(value: number) {
    this._isislsperrordetected = value;
  }
  public resetIsislsperrordetected() {
    this._isislsperrordetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isislsperrordetectedInput() {
    return this._isislsperrordetected;
  }

  // isislsptoolargetopropagate - computed: false, optional: true, required: false
  private _isislsptoolargetopropagate?: number; 
  public get isislsptoolargetopropagate() {
    return this.getNumberAttribute('isislsptoolargetopropagate');
  }
  public set isislsptoolargetopropagate(value: number) {
    this._isislsptoolargetopropagate = value;
  }
  public resetIsislsptoolargetopropagate() {
    this._isislsptoolargetopropagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isislsptoolargetopropagateInput() {
    return this._isislsptoolargetopropagate;
  }

  // isismanualaddressdrops - computed: false, optional: true, required: false
  private _isismanualaddressdrops?: number; 
  public get isismanualaddressdrops() {
    return this.getNumberAttribute('isismanualaddressdrops');
  }
  public set isismanualaddressdrops(value: number) {
    this._isismanualaddressdrops = value;
  }
  public resetIsismanualaddressdrops() {
    this._isismanualaddressdrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isismanualaddressdropsInput() {
    return this._isismanualaddressdrops;
  }

  // isismaxareaaddressesmismatch - computed: false, optional: true, required: false
  private _isismaxareaaddressesmismatch?: number; 
  public get isismaxareaaddressesmismatch() {
    return this.getNumberAttribute('isismaxareaaddressesmismatch');
  }
  public set isismaxareaaddressesmismatch(value: number) {
    this._isismaxareaaddressesmismatch = value;
  }
  public resetIsismaxareaaddressesmismatch() {
    this._isismaxareaaddressesmismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isismaxareaaddressesmismatchInput() {
    return this._isismaxareaaddressesmismatch;
  }

  // isisoriginatinglspbuffersizemismatch - computed: false, optional: true, required: false
  private _isisoriginatinglspbuffersizemismatch?: number; 
  public get isisoriginatinglspbuffersizemismatch() {
    return this.getNumberAttribute('isisoriginatinglspbuffersizemismatch');
  }
  public set isisoriginatinglspbuffersizemismatch(value: number) {
    this._isisoriginatinglspbuffersizemismatch = value;
  }
  public resetIsisoriginatinglspbuffersizemismatch() {
    this._isisoriginatinglspbuffersizemismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisoriginatinglspbuffersizemismatchInput() {
    return this._isisoriginatinglspbuffersizemismatch;
  }

  // isisownlsppurge - computed: false, optional: true, required: false
  private _isisownlsppurge?: number; 
  public get isisownlsppurge() {
    return this.getNumberAttribute('isisownlsppurge');
  }
  public set isisownlsppurge(value: number) {
    this._isisownlsppurge = value;
  }
  public resetIsisownlsppurge() {
    this._isisownlsppurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisownlsppurgeInput() {
    return this._isisownlsppurge;
  }

  // isisprotocolssupportedmismatch - computed: false, optional: true, required: false
  private _isisprotocolssupportedmismatch?: number; 
  public get isisprotocolssupportedmismatch() {
    return this.getNumberAttribute('isisprotocolssupportedmismatch');
  }
  public set isisprotocolssupportedmismatch(value: number) {
    this._isisprotocolssupportedmismatch = value;
  }
  public resetIsisprotocolssupportedmismatch() {
    this._isisprotocolssupportedmismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisprotocolssupportedmismatchInput() {
    return this._isisprotocolssupportedmismatch;
  }

  // isisrejectedadjacency - computed: false, optional: true, required: false
  private _isisrejectedadjacency?: number; 
  public get isisrejectedadjacency() {
    return this.getNumberAttribute('isisrejectedadjacency');
  }
  public set isisrejectedadjacency(value: number) {
    this._isisrejectedadjacency = value;
  }
  public resetIsisrejectedadjacency() {
    this._isisrejectedadjacency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisrejectedadjacencyInput() {
    return this._isisrejectedadjacency;
  }

  // isissequencenumberskip - computed: false, optional: true, required: false
  private _isissequencenumberskip?: number; 
  public get isissequencenumberskip() {
    return this.getNumberAttribute('isissequencenumberskip');
  }
  public set isissequencenumberskip(value: number) {
    this._isissequencenumberskip = value;
  }
  public resetIsissequencenumberskip() {
    this._isissequencenumberskip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isissequencenumberskipInput() {
    return this._isissequencenumberskip;
  }

  // isisversionskew - computed: false, optional: true, required: false
  private _isisversionskew?: number; 
  public get isisversionskew() {
    return this.getNumberAttribute('isisversionskew');
  }
  public set isisversionskew(value: number) {
    this._isisversionskew = value;
  }
  public resetIsisversionskew() {
    this._isisversionskew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisversionskewInput() {
    return this._isisversionskew;
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
}
export interface SnmpServerEnableTrapsRoutingOspf {
  /**
  * Enable ospfIfAuthFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfifauthfailure SnmpServerEnable#ospfifauthfailure}
  */
  readonly ospfifauthfailure?: number;
  /**
  * Enable ospfIfConfigError traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfifconfigerror SnmpServerEnable#ospfifconfigerror}
  */
  readonly ospfifconfigerror?: number;
  /**
  * Enable ospfIfRxBadPacket traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfifrxbadpacket SnmpServerEnable#ospfifrxbadpacket}
  */
  readonly ospfifrxbadpacket?: number;
  /**
  * Enable ospfIfStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfifstatechange SnmpServerEnable#ospfifstatechange}
  */
  readonly ospfifstatechange?: number;
  /**
  * Enable ospfLsdbApproachingOverflow traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospflsdbapproachingoverflow SnmpServerEnable#ospflsdbapproachingoverflow}
  */
  readonly ospflsdbapproachingoverflow?: number;
  /**
  * Enable ospfLsdbOverflow traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospflsdboverflow SnmpServerEnable#ospflsdboverflow}
  */
  readonly ospflsdboverflow?: number;
  /**
  * Enable ospfMaxAgeLsa traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfmaxagelsa SnmpServerEnable#ospfmaxagelsa}
  */
  readonly ospfmaxagelsa?: number;
  /**
  * Enable ospfNbrStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfnbrstatechange SnmpServerEnable#ospfnbrstatechange}
  */
  readonly ospfnbrstatechange?: number;
  /**
  * Enable ospfOriginateLsa traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospforiginatelsa SnmpServerEnable#ospforiginatelsa}
  */
  readonly ospforiginatelsa?: number;
  /**
  * Enable ospfTxRetransmit traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospftxretransmit SnmpServerEnable#ospftxretransmit}
  */
  readonly ospftxretransmit?: number;
  /**
  * Enable ospfVirtIfAuthFailure traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfvirtifauthfailure SnmpServerEnable#ospfvirtifauthfailure}
  */
  readonly ospfvirtifauthfailure?: number;
  /**
  * Enable ospfVirtIfConfigError traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfvirtifconfigerror SnmpServerEnable#ospfvirtifconfigerror}
  */
  readonly ospfvirtifconfigerror?: number;
  /**
  * Enable ospfVirtIfRxBadPacket traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfvirtifrxbadpacket SnmpServerEnable#ospfvirtifrxbadpacket}
  */
  readonly ospfvirtifrxbadpacket?: number;
  /**
  * Enable ospfVirtIfStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfvirtifstatechange SnmpServerEnable#ospfvirtifstatechange}
  */
  readonly ospfvirtifstatechange?: number;
  /**
  * Enable ospfVirtIfTxRetransmit traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfvirtiftxretransmit SnmpServerEnable#ospfvirtiftxretransmit}
  */
  readonly ospfvirtiftxretransmit?: number;
  /**
  * Enable ospfVirtNbrStateChange traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospfvirtnbrstatechange SnmpServerEnable#ospfvirtnbrstatechange}
  */
  readonly ospfvirtnbrstatechange?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsRoutingOspfToTerraform(struct?: SnmpServerEnableTrapsRoutingOspfOutputReference | SnmpServerEnableTrapsRoutingOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospfifauthfailure: cdktf.numberToTerraform(struct!.ospfifauthfailure),
    ospfifconfigerror: cdktf.numberToTerraform(struct!.ospfifconfigerror),
    ospfifrxbadpacket: cdktf.numberToTerraform(struct!.ospfifrxbadpacket),
    ospfifstatechange: cdktf.numberToTerraform(struct!.ospfifstatechange),
    ospflsdbapproachingoverflow: cdktf.numberToTerraform(struct!.ospflsdbapproachingoverflow),
    ospflsdboverflow: cdktf.numberToTerraform(struct!.ospflsdboverflow),
    ospfmaxagelsa: cdktf.numberToTerraform(struct!.ospfmaxagelsa),
    ospfnbrstatechange: cdktf.numberToTerraform(struct!.ospfnbrstatechange),
    ospforiginatelsa: cdktf.numberToTerraform(struct!.ospforiginatelsa),
    ospftxretransmit: cdktf.numberToTerraform(struct!.ospftxretransmit),
    ospfvirtifauthfailure: cdktf.numberToTerraform(struct!.ospfvirtifauthfailure),
    ospfvirtifconfigerror: cdktf.numberToTerraform(struct!.ospfvirtifconfigerror),
    ospfvirtifrxbadpacket: cdktf.numberToTerraform(struct!.ospfvirtifrxbadpacket),
    ospfvirtifstatechange: cdktf.numberToTerraform(struct!.ospfvirtifstatechange),
    ospfvirtiftxretransmit: cdktf.numberToTerraform(struct!.ospfvirtiftxretransmit),
    ospfvirtnbrstatechange: cdktf.numberToTerraform(struct!.ospfvirtnbrstatechange),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsRoutingOspfToHclTerraform(struct?: SnmpServerEnableTrapsRoutingOspfOutputReference | SnmpServerEnableTrapsRoutingOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospfifauthfailure: {
      value: cdktf.numberToHclTerraform(struct!.ospfifauthfailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfifconfigerror: {
      value: cdktf.numberToHclTerraform(struct!.ospfifconfigerror),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfifrxbadpacket: {
      value: cdktf.numberToHclTerraform(struct!.ospfifrxbadpacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfifstatechange: {
      value: cdktf.numberToHclTerraform(struct!.ospfifstatechange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospflsdbapproachingoverflow: {
      value: cdktf.numberToHclTerraform(struct!.ospflsdbapproachingoverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospflsdboverflow: {
      value: cdktf.numberToHclTerraform(struct!.ospflsdboverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfmaxagelsa: {
      value: cdktf.numberToHclTerraform(struct!.ospfmaxagelsa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfnbrstatechange: {
      value: cdktf.numberToHclTerraform(struct!.ospfnbrstatechange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospforiginatelsa: {
      value: cdktf.numberToHclTerraform(struct!.ospforiginatelsa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospftxretransmit: {
      value: cdktf.numberToHclTerraform(struct!.ospftxretransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfvirtifauthfailure: {
      value: cdktf.numberToHclTerraform(struct!.ospfvirtifauthfailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfvirtifconfigerror: {
      value: cdktf.numberToHclTerraform(struct!.ospfvirtifconfigerror),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfvirtifrxbadpacket: {
      value: cdktf.numberToHclTerraform(struct!.ospfvirtifrxbadpacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfvirtifstatechange: {
      value: cdktf.numberToHclTerraform(struct!.ospfvirtifstatechange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfvirtiftxretransmit: {
      value: cdktf.numberToHclTerraform(struct!.ospfvirtiftxretransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfvirtnbrstatechange: {
      value: cdktf.numberToHclTerraform(struct!.ospfvirtnbrstatechange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsRoutingOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsRoutingOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospfifauthfailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfifauthfailure = this._ospfifauthfailure;
    }
    if (this._ospfifconfigerror !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfifconfigerror = this._ospfifconfigerror;
    }
    if (this._ospfifrxbadpacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfifrxbadpacket = this._ospfifrxbadpacket;
    }
    if (this._ospfifstatechange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfifstatechange = this._ospfifstatechange;
    }
    if (this._ospflsdbapproachingoverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospflsdbapproachingoverflow = this._ospflsdbapproachingoverflow;
    }
    if (this._ospflsdboverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospflsdboverflow = this._ospflsdboverflow;
    }
    if (this._ospfmaxagelsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfmaxagelsa = this._ospfmaxagelsa;
    }
    if (this._ospfnbrstatechange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfnbrstatechange = this._ospfnbrstatechange;
    }
    if (this._ospforiginatelsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospforiginatelsa = this._ospforiginatelsa;
    }
    if (this._ospftxretransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospftxretransmit = this._ospftxretransmit;
    }
    if (this._ospfvirtifauthfailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfvirtifauthfailure = this._ospfvirtifauthfailure;
    }
    if (this._ospfvirtifconfigerror !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfvirtifconfigerror = this._ospfvirtifconfigerror;
    }
    if (this._ospfvirtifrxbadpacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfvirtifrxbadpacket = this._ospfvirtifrxbadpacket;
    }
    if (this._ospfvirtifstatechange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfvirtifstatechange = this._ospfvirtifstatechange;
    }
    if (this._ospfvirtiftxretransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfvirtiftxretransmit = this._ospfvirtiftxretransmit;
    }
    if (this._ospfvirtnbrstatechange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfvirtnbrstatechange = this._ospfvirtnbrstatechange;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsRoutingOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospfifauthfailure = undefined;
      this._ospfifconfigerror = undefined;
      this._ospfifrxbadpacket = undefined;
      this._ospfifstatechange = undefined;
      this._ospflsdbapproachingoverflow = undefined;
      this._ospflsdboverflow = undefined;
      this._ospfmaxagelsa = undefined;
      this._ospfnbrstatechange = undefined;
      this._ospforiginatelsa = undefined;
      this._ospftxretransmit = undefined;
      this._ospfvirtifauthfailure = undefined;
      this._ospfvirtifconfigerror = undefined;
      this._ospfvirtifrxbadpacket = undefined;
      this._ospfvirtifstatechange = undefined;
      this._ospfvirtiftxretransmit = undefined;
      this._ospfvirtnbrstatechange = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospfifauthfailure = value.ospfifauthfailure;
      this._ospfifconfigerror = value.ospfifconfigerror;
      this._ospfifrxbadpacket = value.ospfifrxbadpacket;
      this._ospfifstatechange = value.ospfifstatechange;
      this._ospflsdbapproachingoverflow = value.ospflsdbapproachingoverflow;
      this._ospflsdboverflow = value.ospflsdboverflow;
      this._ospfmaxagelsa = value.ospfmaxagelsa;
      this._ospfnbrstatechange = value.ospfnbrstatechange;
      this._ospforiginatelsa = value.ospforiginatelsa;
      this._ospftxretransmit = value.ospftxretransmit;
      this._ospfvirtifauthfailure = value.ospfvirtifauthfailure;
      this._ospfvirtifconfigerror = value.ospfvirtifconfigerror;
      this._ospfvirtifrxbadpacket = value.ospfvirtifrxbadpacket;
      this._ospfvirtifstatechange = value.ospfvirtifstatechange;
      this._ospfvirtiftxretransmit = value.ospfvirtiftxretransmit;
      this._ospfvirtnbrstatechange = value.ospfvirtnbrstatechange;
      this._uuid = value.uuid;
    }
  }

  // ospfifauthfailure - computed: false, optional: true, required: false
  private _ospfifauthfailure?: number; 
  public get ospfifauthfailure() {
    return this.getNumberAttribute('ospfifauthfailure');
  }
  public set ospfifauthfailure(value: number) {
    this._ospfifauthfailure = value;
  }
  public resetOspfifauthfailure() {
    this._ospfifauthfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifauthfailureInput() {
    return this._ospfifauthfailure;
  }

  // ospfifconfigerror - computed: false, optional: true, required: false
  private _ospfifconfigerror?: number; 
  public get ospfifconfigerror() {
    return this.getNumberAttribute('ospfifconfigerror');
  }
  public set ospfifconfigerror(value: number) {
    this._ospfifconfigerror = value;
  }
  public resetOspfifconfigerror() {
    this._ospfifconfigerror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifconfigerrorInput() {
    return this._ospfifconfigerror;
  }

  // ospfifrxbadpacket - computed: false, optional: true, required: false
  private _ospfifrxbadpacket?: number; 
  public get ospfifrxbadpacket() {
    return this.getNumberAttribute('ospfifrxbadpacket');
  }
  public set ospfifrxbadpacket(value: number) {
    this._ospfifrxbadpacket = value;
  }
  public resetOspfifrxbadpacket() {
    this._ospfifrxbadpacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifrxbadpacketInput() {
    return this._ospfifrxbadpacket;
  }

  // ospfifstatechange - computed: false, optional: true, required: false
  private _ospfifstatechange?: number; 
  public get ospfifstatechange() {
    return this.getNumberAttribute('ospfifstatechange');
  }
  public set ospfifstatechange(value: number) {
    this._ospfifstatechange = value;
  }
  public resetOspfifstatechange() {
    this._ospfifstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfifstatechangeInput() {
    return this._ospfifstatechange;
  }

  // ospflsdbapproachingoverflow - computed: false, optional: true, required: false
  private _ospflsdbapproachingoverflow?: number; 
  public get ospflsdbapproachingoverflow() {
    return this.getNumberAttribute('ospflsdbapproachingoverflow');
  }
  public set ospflsdbapproachingoverflow(value: number) {
    this._ospflsdbapproachingoverflow = value;
  }
  public resetOspflsdbapproachingoverflow() {
    this._ospflsdbapproachingoverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospflsdbapproachingoverflowInput() {
    return this._ospflsdbapproachingoverflow;
  }

  // ospflsdboverflow - computed: false, optional: true, required: false
  private _ospflsdboverflow?: number; 
  public get ospflsdboverflow() {
    return this.getNumberAttribute('ospflsdboverflow');
  }
  public set ospflsdboverflow(value: number) {
    this._ospflsdboverflow = value;
  }
  public resetOspflsdboverflow() {
    this._ospflsdboverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospflsdboverflowInput() {
    return this._ospflsdboverflow;
  }

  // ospfmaxagelsa - computed: false, optional: true, required: false
  private _ospfmaxagelsa?: number; 
  public get ospfmaxagelsa() {
    return this.getNumberAttribute('ospfmaxagelsa');
  }
  public set ospfmaxagelsa(value: number) {
    this._ospfmaxagelsa = value;
  }
  public resetOspfmaxagelsa() {
    this._ospfmaxagelsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfmaxagelsaInput() {
    return this._ospfmaxagelsa;
  }

  // ospfnbrstatechange - computed: false, optional: true, required: false
  private _ospfnbrstatechange?: number; 
  public get ospfnbrstatechange() {
    return this.getNumberAttribute('ospfnbrstatechange');
  }
  public set ospfnbrstatechange(value: number) {
    this._ospfnbrstatechange = value;
  }
  public resetOspfnbrstatechange() {
    this._ospfnbrstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfnbrstatechangeInput() {
    return this._ospfnbrstatechange;
  }

  // ospforiginatelsa - computed: false, optional: true, required: false
  private _ospforiginatelsa?: number; 
  public get ospforiginatelsa() {
    return this.getNumberAttribute('ospforiginatelsa');
  }
  public set ospforiginatelsa(value: number) {
    this._ospforiginatelsa = value;
  }
  public resetOspforiginatelsa() {
    this._ospforiginatelsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospforiginatelsaInput() {
    return this._ospforiginatelsa;
  }

  // ospftxretransmit - computed: false, optional: true, required: false
  private _ospftxretransmit?: number; 
  public get ospftxretransmit() {
    return this.getNumberAttribute('ospftxretransmit');
  }
  public set ospftxretransmit(value: number) {
    this._ospftxretransmit = value;
  }
  public resetOspftxretransmit() {
    this._ospftxretransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospftxretransmitInput() {
    return this._ospftxretransmit;
  }

  // ospfvirtifauthfailure - computed: false, optional: true, required: false
  private _ospfvirtifauthfailure?: number; 
  public get ospfvirtifauthfailure() {
    return this.getNumberAttribute('ospfvirtifauthfailure');
  }
  public set ospfvirtifauthfailure(value: number) {
    this._ospfvirtifauthfailure = value;
  }
  public resetOspfvirtifauthfailure() {
    this._ospfvirtifauthfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifauthfailureInput() {
    return this._ospfvirtifauthfailure;
  }

  // ospfvirtifconfigerror - computed: false, optional: true, required: false
  private _ospfvirtifconfigerror?: number; 
  public get ospfvirtifconfigerror() {
    return this.getNumberAttribute('ospfvirtifconfigerror');
  }
  public set ospfvirtifconfigerror(value: number) {
    this._ospfvirtifconfigerror = value;
  }
  public resetOspfvirtifconfigerror() {
    this._ospfvirtifconfigerror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifconfigerrorInput() {
    return this._ospfvirtifconfigerror;
  }

  // ospfvirtifrxbadpacket - computed: false, optional: true, required: false
  private _ospfvirtifrxbadpacket?: number; 
  public get ospfvirtifrxbadpacket() {
    return this.getNumberAttribute('ospfvirtifrxbadpacket');
  }
  public set ospfvirtifrxbadpacket(value: number) {
    this._ospfvirtifrxbadpacket = value;
  }
  public resetOspfvirtifrxbadpacket() {
    this._ospfvirtifrxbadpacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifrxbadpacketInput() {
    return this._ospfvirtifrxbadpacket;
  }

  // ospfvirtifstatechange - computed: false, optional: true, required: false
  private _ospfvirtifstatechange?: number; 
  public get ospfvirtifstatechange() {
    return this.getNumberAttribute('ospfvirtifstatechange');
  }
  public set ospfvirtifstatechange(value: number) {
    this._ospfvirtifstatechange = value;
  }
  public resetOspfvirtifstatechange() {
    this._ospfvirtifstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtifstatechangeInput() {
    return this._ospfvirtifstatechange;
  }

  // ospfvirtiftxretransmit - computed: false, optional: true, required: false
  private _ospfvirtiftxretransmit?: number; 
  public get ospfvirtiftxretransmit() {
    return this.getNumberAttribute('ospfvirtiftxretransmit');
  }
  public set ospfvirtiftxretransmit(value: number) {
    this._ospfvirtiftxretransmit = value;
  }
  public resetOspfvirtiftxretransmit() {
    this._ospfvirtiftxretransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtiftxretransmitInput() {
    return this._ospfvirtiftxretransmit;
  }

  // ospfvirtnbrstatechange - computed: false, optional: true, required: false
  private _ospfvirtnbrstatechange?: number; 
  public get ospfvirtnbrstatechange() {
    return this.getNumberAttribute('ospfvirtnbrstatechange');
  }
  public set ospfvirtnbrstatechange(value: number) {
    this._ospfvirtnbrstatechange = value;
  }
  public resetOspfvirtnbrstatechange() {
    this._ospfvirtnbrstatechange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfvirtnbrstatechangeInput() {
    return this._ospfvirtnbrstatechange;
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
}
export interface SnmpServerEnableTrapsRouting {
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bgp SnmpServerEnable#bgp}
  */
  readonly bgp?: SnmpServerEnableTrapsRoutingBgp;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#isis SnmpServerEnable#isis}
  */
  readonly isis?: SnmpServerEnableTrapsRoutingIsis;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ospf SnmpServerEnable#ospf}
  */
  readonly ospf?: SnmpServerEnableTrapsRoutingOspf;
}

export function snmpServerEnableTrapsRoutingToTerraform(struct?: SnmpServerEnableTrapsRoutingOutputReference | SnmpServerEnableTrapsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: snmpServerEnableTrapsRoutingBgpToTerraform(struct!.bgp),
    isis: snmpServerEnableTrapsRoutingIsisToTerraform(struct!.isis),
    ospf: snmpServerEnableTrapsRoutingOspfToTerraform(struct!.ospf),
  }
}


export function snmpServerEnableTrapsRoutingToHclTerraform(struct?: SnmpServerEnableTrapsRoutingOutputReference | SnmpServerEnableTrapsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: snmpServerEnableTrapsRoutingBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsRoutingBgpList",
    },
    isis: {
      value: snmpServerEnableTrapsRoutingIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsRoutingIsisList",
    },
    ospf: {
      value: snmpServerEnableTrapsRoutingOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsRoutingOspfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgp.internalValue = undefined;
      this._isis.internalValue = undefined;
      this._ospf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgp.internalValue = value.bgp;
      this._isis.internalValue = value.isis;
      this._ospf.internalValue = value.ospf;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new SnmpServerEnableTrapsRoutingBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: SnmpServerEnableTrapsRoutingBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new SnmpServerEnableTrapsRoutingIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: SnmpServerEnableTrapsRoutingIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new SnmpServerEnableTrapsRoutingOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: SnmpServerEnableTrapsRoutingOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }
}
export interface SnmpServerEnableTrapsScaleoutInfrastructureCluster {
  /**
  * Enable election status trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#election SnmpServerEnable#election}
  */
  readonly election?: number;
  /**
  * Enable re-election trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#master_calling_re_election SnmpServerEnable#master_calling_re_election}
  */
  readonly masterCallingReElection?: number;
  /**
  * Enable active node status trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#node_status SnmpServerEnable#node_status}
  */
  readonly nodeStatus?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsScaleoutInfrastructureClusterToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureClusterOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    election: cdktf.numberToTerraform(struct!.election),
    master_calling_re_election: cdktf.numberToTerraform(struct!.masterCallingReElection),
    node_status: cdktf.numberToTerraform(struct!.nodeStatus),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureClusterToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureClusterOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    election: {
      value: cdktf.numberToHclTerraform(struct!.election),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_calling_re_election: {
      value: cdktf.numberToHclTerraform(struct!.masterCallingReElection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_status: {
      value: cdktf.numberToHclTerraform(struct!.nodeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsScaleoutInfrastructureClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructureCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._election !== undefined) {
      hasAnyValues = true;
      internalValueResult.election = this._election;
    }
    if (this._masterCallingReElection !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCallingReElection = this._masterCallingReElection;
    }
    if (this._nodeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStatus = this._nodeStatus;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructureCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._election = undefined;
      this._masterCallingReElection = undefined;
      this._nodeStatus = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._election = value.election;
      this._masterCallingReElection = value.masterCallingReElection;
      this._nodeStatus = value.nodeStatus;
      this._uuid = value.uuid;
    }
  }

  // election - computed: false, optional: true, required: false
  private _election?: number; 
  public get election() {
    return this.getNumberAttribute('election');
  }
  public set election(value: number) {
    this._election = value;
  }
  public resetElection() {
    this._election = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electionInput() {
    return this._election;
  }

  // master_calling_re_election - computed: false, optional: true, required: false
  private _masterCallingReElection?: number; 
  public get masterCallingReElection() {
    return this.getNumberAttribute('master_calling_re_election');
  }
  public set masterCallingReElection(value: number) {
    this._masterCallingReElection = value;
  }
  public resetMasterCallingReElection() {
    this._masterCallingReElection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCallingReElectionInput() {
    return this._masterCallingReElection;
  }

  // node_status - computed: false, optional: true, required: false
  private _nodeStatus?: number; 
  public get nodeStatus() {
    return this.getNumberAttribute('node_status');
  }
  public set nodeStatus(value: number) {
    this._nodeStatus = value;
  }
  public resetNodeStatus() {
    this._nodeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusInput() {
    return this._nodeStatus;
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
}
export interface SnmpServerEnableTrapsScaleoutInfrastructureMasterNode {
  /**
  * Enable Traffic-map distribution trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#traffic_map_distribution SnmpServerEnable#traffic_map_distribution}
  */
  readonly trafficMapDistribution?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable VServer Traffic-map trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vserver_traffic_map_update SnmpServerEnable#vserver_traffic_map_update}
  */
  readonly vserverTrafficMapUpdate?: number;
}

export function snmpServerEnableTrapsScaleoutInfrastructureMasterNodeToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_map_distribution: cdktf.numberToTerraform(struct!.trafficMapDistribution),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vserver_traffic_map_update: cdktf.numberToTerraform(struct!.vserverTrafficMapUpdate),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureMasterNodeToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_map_distribution: {
      value: cdktf.numberToHclTerraform(struct!.trafficMapDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vserver_traffic_map_update: {
      value: cdktf.numberToHclTerraform(struct!.vserverTrafficMapUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructureMasterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficMapDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMapDistribution = this._trafficMapDistribution;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vserverTrafficMapUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserverTrafficMapUpdate = this._vserverTrafficMapUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructureMasterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trafficMapDistribution = undefined;
      this._uuid = undefined;
      this._vserverTrafficMapUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trafficMapDistribution = value.trafficMapDistribution;
      this._uuid = value.uuid;
      this._vserverTrafficMapUpdate = value.vserverTrafficMapUpdate;
    }
  }

  // traffic_map_distribution - computed: false, optional: true, required: false
  private _trafficMapDistribution?: number; 
  public get trafficMapDistribution() {
    return this.getNumberAttribute('traffic_map_distribution');
  }
  public set trafficMapDistribution(value: number) {
    this._trafficMapDistribution = value;
  }
  public resetTrafficMapDistribution() {
    this._trafficMapDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapDistributionInput() {
    return this._trafficMapDistribution;
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

  // vserver_traffic_map_update - computed: false, optional: true, required: false
  private _vserverTrafficMapUpdate?: number; 
  public get vserverTrafficMapUpdate() {
    return this.getNumberAttribute('vserver_traffic_map_update');
  }
  public set vserverTrafficMapUpdate(value: number) {
    this._vserverTrafficMapUpdate = value;
  }
  public resetVserverTrafficMapUpdate() {
    this._vserverTrafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverTrafficMapUpdateInput() {
    return this._vserverTrafficMapUpdate;
  }
}
export interface SnmpServerEnableTrapsScaleoutInfrastructureServiceNode {
  /**
  * Enable local device disabled trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#local_device_disabled SnmpServerEnable#local_device_disabled}
  */
  readonly localDeviceDisabled?: number;
  /**
  * Enable service-master trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_master SnmpServerEnable#service_master}
  */
  readonly serviceMaster?: number;
  /**
  * Enable traffic map update trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#traffic_map_update SnmpServerEnable#traffic_map_update}
  */
  readonly trafficMapUpdate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsScaleoutInfrastructureServiceNodeToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureServiceNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_device_disabled: cdktf.numberToTerraform(struct!.localDeviceDisabled),
    service_master: cdktf.numberToTerraform(struct!.serviceMaster),
    traffic_map_update: cdktf.numberToTerraform(struct!.trafficMapUpdate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureServiceNodeToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureServiceNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_device_disabled: {
      value: cdktf.numberToHclTerraform(struct!.localDeviceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_master: {
      value: cdktf.numberToHclTerraform(struct!.serviceMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_map_update: {
      value: cdktf.numberToHclTerraform(struct!.trafficMapUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructureServiceNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDeviceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDeviceDisabled = this._localDeviceDisabled;
    }
    if (this._serviceMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMaster = this._serviceMaster;
    }
    if (this._trafficMapUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMapUpdate = this._trafficMapUpdate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructureServiceNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDeviceDisabled = undefined;
      this._serviceMaster = undefined;
      this._trafficMapUpdate = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDeviceDisabled = value.localDeviceDisabled;
      this._serviceMaster = value.serviceMaster;
      this._trafficMapUpdate = value.trafficMapUpdate;
      this._uuid = value.uuid;
    }
  }

  // local_device_disabled - computed: false, optional: true, required: false
  private _localDeviceDisabled?: number; 
  public get localDeviceDisabled() {
    return this.getNumberAttribute('local_device_disabled');
  }
  public set localDeviceDisabled(value: number) {
    this._localDeviceDisabled = value;
  }
  public resetLocalDeviceDisabled() {
    this._localDeviceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeviceDisabledInput() {
    return this._localDeviceDisabled;
  }

  // service_master - computed: false, optional: true, required: false
  private _serviceMaster?: number; 
  public get serviceMaster() {
    return this.getNumberAttribute('service_master');
  }
  public set serviceMaster(value: number) {
    this._serviceMaster = value;
  }
  public resetServiceMaster() {
    this._serviceMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMasterInput() {
    return this._serviceMaster;
  }

  // traffic_map_update - computed: false, optional: true, required: false
  private _trafficMapUpdate?: number; 
  public get trafficMapUpdate() {
    return this.getNumberAttribute('traffic_map_update');
  }
  public set trafficMapUpdate(value: number) {
    this._trafficMapUpdate = value;
  }
  public resetTrafficMapUpdate() {
    this._trafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapUpdateInput() {
    return this._trafficMapUpdate;
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
}
export interface SnmpServerEnableTrapsScaleoutInfrastructure {
  /**
  * Enable all infra traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Send all infra traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#test_send_all_traps SnmpServerEnable#test_send_all_traps}
  */
  readonly testSendAllTraps?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#cluster SnmpServerEnable#cluster}
  */
  readonly cluster?: SnmpServerEnableTrapsScaleoutInfrastructureCluster;
  /**
  * master_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#master_node SnmpServerEnable#master_node}
  */
  readonly masterNode?: SnmpServerEnableTrapsScaleoutInfrastructureMasterNode;
  /**
  * service_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_node SnmpServerEnable#service_node}
  */
  readonly serviceNode?: SnmpServerEnableTrapsScaleoutInfrastructureServiceNode;
}

export function snmpServerEnableTrapsScaleoutInfrastructureToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureOutputReference | SnmpServerEnableTrapsScaleoutInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    test_send_all_traps: cdktf.numberToTerraform(struct!.testSendAllTraps),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cluster: snmpServerEnableTrapsScaleoutInfrastructureClusterToTerraform(struct!.cluster),
    master_node: snmpServerEnableTrapsScaleoutInfrastructureMasterNodeToTerraform(struct!.masterNode),
    service_node: snmpServerEnableTrapsScaleoutInfrastructureServiceNodeToTerraform(struct!.serviceNode),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureOutputReference | SnmpServerEnableTrapsScaleoutInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_send_all_traps: {
      value: cdktf.numberToHclTerraform(struct!.testSendAllTraps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: snmpServerEnableTrapsScaleoutInfrastructureClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureClusterList",
    },
    master_node: {
      value: snmpServerEnableTrapsScaleoutInfrastructureMasterNodeToHclTerraform(struct!.masterNode),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeList",
    },
    service_node: {
      value: snmpServerEnableTrapsScaleoutInfrastructureServiceNodeToHclTerraform(struct!.serviceNode),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsScaleoutInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._testSendAllTraps !== undefined) {
      hasAnyValues = true;
      internalValueResult.testSendAllTraps = this._testSendAllTraps;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._masterNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterNode = this._masterNode?.internalValue;
    }
    if (this._serviceNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNode = this._serviceNode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._testSendAllTraps = undefined;
      this._uuid = undefined;
      this._cluster.internalValue = undefined;
      this._masterNode.internalValue = undefined;
      this._serviceNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._testSendAllTraps = value.testSendAllTraps;
      this._uuid = value.uuid;
      this._cluster.internalValue = value.cluster;
      this._masterNode.internalValue = value.masterNode;
      this._serviceNode.internalValue = value.serviceNode;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // test_send_all_traps - computed: false, optional: true, required: false
  private _testSendAllTraps?: number; 
  public get testSendAllTraps() {
    return this.getNumberAttribute('test_send_all_traps');
  }
  public set testSendAllTraps(value: number) {
    this._testSendAllTraps = value;
  }
  public resetTestSendAllTraps() {
    this._testSendAllTraps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSendAllTrapsInput() {
    return this._testSendAllTraps;
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

  // cluster - computed: false, optional: true, required: false
  private _cluster = new SnmpServerEnableTrapsScaleoutInfrastructureClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SnmpServerEnableTrapsScaleoutInfrastructureCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // master_node - computed: false, optional: true, required: false
  private _masterNode = new SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeOutputReference(this, "master_node");
  public get masterNode() {
    return this._masterNode;
  }
  public putMasterNode(value: SnmpServerEnableTrapsScaleoutInfrastructureMasterNode) {
    this._masterNode.internalValue = value;
  }
  public resetMasterNode() {
    this._masterNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeInput() {
    return this._masterNode.internalValue;
  }

  // service_node - computed: false, optional: true, required: false
  private _serviceNode = new SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeOutputReference(this, "service_node");
  public get serviceNode() {
    return this._serviceNode;
  }
  public putServiceNode(value: SnmpServerEnableTrapsScaleoutInfrastructureServiceNode) {
    this._serviceNode.internalValue = value;
  }
  public resetServiceNode() {
    this._serviceNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeInput() {
    return this._serviceNode.internalValue;
  }
}
export interface SnmpServerEnableTrapsScaleout {
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#infrastructure SnmpServerEnable#infrastructure}
  */
  readonly infrastructure?: SnmpServerEnableTrapsScaleoutInfrastructure;
}

export function snmpServerEnableTrapsScaleoutToTerraform(struct?: SnmpServerEnableTrapsScaleoutOutputReference | SnmpServerEnableTrapsScaleout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infrastructure: snmpServerEnableTrapsScaleoutInfrastructureToTerraform(struct!.infrastructure),
  }
}


export function snmpServerEnableTrapsScaleoutToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutOutputReference | SnmpServerEnableTrapsScaleout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infrastructure: {
      value: snmpServerEnableTrapsScaleoutInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsScaleoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infrastructure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infrastructure.internalValue = value.infrastructure;
    }
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new SnmpServerEnableTrapsScaleoutInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SnmpServerEnableTrapsScaleoutInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }
}
export interface SnmpServerEnableTrapsSlb {
  /**
  * Enable all SLB traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable application buffer reach limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#application_buffer_limit SnmpServerEnable#application_buffer_limit}
  */
  readonly applicationBufferLimit?: number;
  /**
  * Enable SLB server/port bandwidth rate limit exceed trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bw_rate_limit_exceed SnmpServerEnable#bw_rate_limit_exceed}
  */
  readonly bwRateLimitExceed?: number;
  /**
  * Enable SLB server/port bandwidth rate limit resume trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#bw_rate_limit_resume SnmpServerEnable#bw_rate_limit_resume}
  */
  readonly bwRateLimitResume?: number;
  /**
  * Enable SLB server gateway down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#gateway_down SnmpServerEnable#gateway_down}
  */
  readonly gatewayDown?: number;
  /**
  * Enable SLB server gateway up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#gateway_up SnmpServerEnable#gateway_up}
  */
  readonly gatewayUp?: number;
  /**
  * Enable SLB server connection limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_conn_limit SnmpServerEnable#server_conn_limit}
  */
  readonly serverConnLimit?: number;
  /**
  * Enable SLB server connection resume trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_conn_resume SnmpServerEnable#server_conn_resume}
  */
  readonly serverConnResume?: number;
  /**
  * Enable SLB server-disabled trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_disabled SnmpServerEnable#server_disabled}
  */
  readonly serverDisabled?: number;
  /**
  * Enable SLB server-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_down SnmpServerEnable#server_down}
  */
  readonly serverDown?: number;
  /**
  * Enable SLB server selection failure trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_selection_failure SnmpServerEnable#server_selection_failure}
  */
  readonly serverSelectionFailure?: number;
  /**
  * Enable slb server up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_up SnmpServerEnable#server_up}
  */
  readonly serverUp?: number;
  /**
  * Enable SLB service connection limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_conn_limit SnmpServerEnable#service_conn_limit}
  */
  readonly serviceConnLimit?: number;
  /**
  * Enable SLB service connection resume trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_conn_resume SnmpServerEnable#service_conn_resume}
  */
  readonly serviceConnResume?: number;
  /**
  * Enable SLB service-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_down SnmpServerEnable#service_down}
  */
  readonly serviceDown?: number;
  /**
  * Enable SLB service-group-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_group_down SnmpServerEnable#service_group_down}
  */
  readonly serviceGroupDown?: number;
  /**
  * Enable SLB service-group-member-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_group_member_down SnmpServerEnable#service_group_member_down}
  */
  readonly serviceGroupMemberDown?: number;
  /**
  * Enable SLB service-group-member-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_group_member_up SnmpServerEnable#service_group_member_up}
  */
  readonly serviceGroupMemberUp?: number;
  /**
  * Enable SLB service-group-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_group_up SnmpServerEnable#service_group_up}
  */
  readonly serviceGroupUp?: number;
  /**
  * Enable SLB service-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#service_up SnmpServerEnable#service_up}
  */
  readonly serviceUp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable the virtual server reach conn-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_connlimit SnmpServerEnable#vip_connlimit}
  */
  readonly vipConnlimit?: number;
  /**
  * Enable the virtual server reach conn-rate-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_connratelimit SnmpServerEnable#vip_connratelimit}
  */
  readonly vipConnratelimit?: number;
  /**
  * Enable SLB virtual server down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_down SnmpServerEnable#vip_down}
  */
  readonly vipDown?: number;
  /**
  * Enable the virtual port reach conn-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_port_connlimit SnmpServerEnable#vip_port_connlimit}
  */
  readonly vipPortConnlimit?: number;
  /**
  * Enable the virtual port reach conn-rate-limit trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_port_connratelimit SnmpServerEnable#vip_port_connratelimit}
  */
  readonly vipPortConnratelimit?: number;
  /**
  * Enable SLB virtual port down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_port_down SnmpServerEnable#vip_port_down}
  */
  readonly vipPortDown?: number;
  /**
  * Enable SLB virtual port up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_port_up SnmpServerEnable#vip_port_up}
  */
  readonly vipPortUp?: number;
  /**
  * Enable SLB virtual server up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_up SnmpServerEnable#vip_up}
  */
  readonly vipUp?: number;
}

export function snmpServerEnableTrapsSlbToTerraform(struct?: SnmpServerEnableTrapsSlbOutputReference | SnmpServerEnableTrapsSlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    application_buffer_limit: cdktf.numberToTerraform(struct!.applicationBufferLimit),
    bw_rate_limit_exceed: cdktf.numberToTerraform(struct!.bwRateLimitExceed),
    bw_rate_limit_resume: cdktf.numberToTerraform(struct!.bwRateLimitResume),
    gateway_down: cdktf.numberToTerraform(struct!.gatewayDown),
    gateway_up: cdktf.numberToTerraform(struct!.gatewayUp),
    server_conn_limit: cdktf.numberToTerraform(struct!.serverConnLimit),
    server_conn_resume: cdktf.numberToTerraform(struct!.serverConnResume),
    server_disabled: cdktf.numberToTerraform(struct!.serverDisabled),
    server_down: cdktf.numberToTerraform(struct!.serverDown),
    server_selection_failure: cdktf.numberToTerraform(struct!.serverSelectionFailure),
    server_up: cdktf.numberToTerraform(struct!.serverUp),
    service_conn_limit: cdktf.numberToTerraform(struct!.serviceConnLimit),
    service_conn_resume: cdktf.numberToTerraform(struct!.serviceConnResume),
    service_down: cdktf.numberToTerraform(struct!.serviceDown),
    service_group_down: cdktf.numberToTerraform(struct!.serviceGroupDown),
    service_group_member_down: cdktf.numberToTerraform(struct!.serviceGroupMemberDown),
    service_group_member_up: cdktf.numberToTerraform(struct!.serviceGroupMemberUp),
    service_group_up: cdktf.numberToTerraform(struct!.serviceGroupUp),
    service_up: cdktf.numberToTerraform(struct!.serviceUp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vip_connlimit: cdktf.numberToTerraform(struct!.vipConnlimit),
    vip_connratelimit: cdktf.numberToTerraform(struct!.vipConnratelimit),
    vip_down: cdktf.numberToTerraform(struct!.vipDown),
    vip_port_connlimit: cdktf.numberToTerraform(struct!.vipPortConnlimit),
    vip_port_connratelimit: cdktf.numberToTerraform(struct!.vipPortConnratelimit),
    vip_port_down: cdktf.numberToTerraform(struct!.vipPortDown),
    vip_port_up: cdktf.numberToTerraform(struct!.vipPortUp),
    vip_up: cdktf.numberToTerraform(struct!.vipUp),
  }
}


export function snmpServerEnableTrapsSlbToHclTerraform(struct?: SnmpServerEnableTrapsSlbOutputReference | SnmpServerEnableTrapsSlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_buffer_limit: {
      value: cdktf.numberToHclTerraform(struct!.applicationBufferLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_rate_limit_resume: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimitResume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway_down: {
      value: cdktf.numberToHclTerraform(struct!.gatewayDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway_up: {
      value: cdktf.numberToHclTerraform(struct!.gatewayUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.serverConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_resume: {
      value: cdktf.numberToHclTerraform(struct!.serverConnResume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_disabled: {
      value: cdktf.numberToHclTerraform(struct!.serverDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_down: {
      value: cdktf.numberToHclTerraform(struct!.serverDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_selection_failure: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectionFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_up: {
      value: cdktf.numberToHclTerraform(struct!.serverUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.serviceConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_conn_resume: {
      value: cdktf.numberToHclTerraform(struct!.serviceConnResume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_down: {
      value: cdktf.numberToHclTerraform(struct!.serviceDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_down: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_member_down: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMemberDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_member_up: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMemberUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_up: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_up: {
      value: cdktf.numberToHclTerraform(struct!.serviceUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_connlimit: {
      value: cdktf.numberToHclTerraform(struct!.vipConnlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_connratelimit: {
      value: cdktf.numberToHclTerraform(struct!.vipConnratelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_down: {
      value: cdktf.numberToHclTerraform(struct!.vipDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_port_connlimit: {
      value: cdktf.numberToHclTerraform(struct!.vipPortConnlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_port_connratelimit: {
      value: cdktf.numberToHclTerraform(struct!.vipPortConnratelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_port_down: {
      value: cdktf.numberToHclTerraform(struct!.vipPortDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_port_up: {
      value: cdktf.numberToHclTerraform(struct!.vipPortUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_up: {
      value: cdktf.numberToHclTerraform(struct!.vipUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsSlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._applicationBufferLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationBufferLimit = this._applicationBufferLimit;
    }
    if (this._bwRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimitExceed = this._bwRateLimitExceed;
    }
    if (this._bwRateLimitResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimitResume = this._bwRateLimitResume;
    }
    if (this._gatewayDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayDown = this._gatewayDown;
    }
    if (this._gatewayUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayUp = this._gatewayUp;
    }
    if (this._serverConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnLimit = this._serverConnLimit;
    }
    if (this._serverConnResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnResume = this._serverConnResume;
    }
    if (this._serverDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDisabled = this._serverDisabled;
    }
    if (this._serverDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDown = this._serverDown;
    }
    if (this._serverSelectionFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectionFailure = this._serverSelectionFailure;
    }
    if (this._serverUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUp = this._serverUp;
    }
    if (this._serviceConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConnLimit = this._serviceConnLimit;
    }
    if (this._serviceConnResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConnResume = this._serviceConnResume;
    }
    if (this._serviceDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDown = this._serviceDown;
    }
    if (this._serviceGroupDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupDown = this._serviceGroupDown;
    }
    if (this._serviceGroupMemberDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMemberDown = this._serviceGroupMemberDown;
    }
    if (this._serviceGroupMemberUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMemberUp = this._serviceGroupMemberUp;
    }
    if (this._serviceGroupUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupUp = this._serviceGroupUp;
    }
    if (this._serviceUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUp = this._serviceUp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vipConnlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipConnlimit = this._vipConnlimit;
    }
    if (this._vipConnratelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipConnratelimit = this._vipConnratelimit;
    }
    if (this._vipDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipDown = this._vipDown;
    }
    if (this._vipPortConnlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipPortConnlimit = this._vipPortConnlimit;
    }
    if (this._vipPortConnratelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipPortConnratelimit = this._vipPortConnratelimit;
    }
    if (this._vipPortDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipPortDown = this._vipPortDown;
    }
    if (this._vipPortUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipPortUp = this._vipPortUp;
    }
    if (this._vipUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipUp = this._vipUp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._applicationBufferLimit = undefined;
      this._bwRateLimitExceed = undefined;
      this._bwRateLimitResume = undefined;
      this._gatewayDown = undefined;
      this._gatewayUp = undefined;
      this._serverConnLimit = undefined;
      this._serverConnResume = undefined;
      this._serverDisabled = undefined;
      this._serverDown = undefined;
      this._serverSelectionFailure = undefined;
      this._serverUp = undefined;
      this._serviceConnLimit = undefined;
      this._serviceConnResume = undefined;
      this._serviceDown = undefined;
      this._serviceGroupDown = undefined;
      this._serviceGroupMemberDown = undefined;
      this._serviceGroupMemberUp = undefined;
      this._serviceGroupUp = undefined;
      this._serviceUp = undefined;
      this._uuid = undefined;
      this._vipConnlimit = undefined;
      this._vipConnratelimit = undefined;
      this._vipDown = undefined;
      this._vipPortConnlimit = undefined;
      this._vipPortConnratelimit = undefined;
      this._vipPortDown = undefined;
      this._vipPortUp = undefined;
      this._vipUp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._applicationBufferLimit = value.applicationBufferLimit;
      this._bwRateLimitExceed = value.bwRateLimitExceed;
      this._bwRateLimitResume = value.bwRateLimitResume;
      this._gatewayDown = value.gatewayDown;
      this._gatewayUp = value.gatewayUp;
      this._serverConnLimit = value.serverConnLimit;
      this._serverConnResume = value.serverConnResume;
      this._serverDisabled = value.serverDisabled;
      this._serverDown = value.serverDown;
      this._serverSelectionFailure = value.serverSelectionFailure;
      this._serverUp = value.serverUp;
      this._serviceConnLimit = value.serviceConnLimit;
      this._serviceConnResume = value.serviceConnResume;
      this._serviceDown = value.serviceDown;
      this._serviceGroupDown = value.serviceGroupDown;
      this._serviceGroupMemberDown = value.serviceGroupMemberDown;
      this._serviceGroupMemberUp = value.serviceGroupMemberUp;
      this._serviceGroupUp = value.serviceGroupUp;
      this._serviceUp = value.serviceUp;
      this._uuid = value.uuid;
      this._vipConnlimit = value.vipConnlimit;
      this._vipConnratelimit = value.vipConnratelimit;
      this._vipDown = value.vipDown;
      this._vipPortConnlimit = value.vipPortConnlimit;
      this._vipPortConnratelimit = value.vipPortConnratelimit;
      this._vipPortDown = value.vipPortDown;
      this._vipPortUp = value.vipPortUp;
      this._vipUp = value.vipUp;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // application_buffer_limit - computed: false, optional: true, required: false
  private _applicationBufferLimit?: number; 
  public get applicationBufferLimit() {
    return this.getNumberAttribute('application_buffer_limit');
  }
  public set applicationBufferLimit(value: number) {
    this._applicationBufferLimit = value;
  }
  public resetApplicationBufferLimit() {
    this._applicationBufferLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationBufferLimitInput() {
    return this._applicationBufferLimit;
  }

  // bw_rate_limit_exceed - computed: false, optional: true, required: false
  private _bwRateLimitExceed?: number; 
  public get bwRateLimitExceed() {
    return this.getNumberAttribute('bw_rate_limit_exceed');
  }
  public set bwRateLimitExceed(value: number) {
    this._bwRateLimitExceed = value;
  }
  public resetBwRateLimitExceed() {
    this._bwRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitExceedInput() {
    return this._bwRateLimitExceed;
  }

  // bw_rate_limit_resume - computed: false, optional: true, required: false
  private _bwRateLimitResume?: number; 
  public get bwRateLimitResume() {
    return this.getNumberAttribute('bw_rate_limit_resume');
  }
  public set bwRateLimitResume(value: number) {
    this._bwRateLimitResume = value;
  }
  public resetBwRateLimitResume() {
    this._bwRateLimitResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitResumeInput() {
    return this._bwRateLimitResume;
  }

  // gateway_down - computed: false, optional: true, required: false
  private _gatewayDown?: number; 
  public get gatewayDown() {
    return this.getNumberAttribute('gateway_down');
  }
  public set gatewayDown(value: number) {
    this._gatewayDown = value;
  }
  public resetGatewayDown() {
    this._gatewayDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDownInput() {
    return this._gatewayDown;
  }

  // gateway_up - computed: false, optional: true, required: false
  private _gatewayUp?: number; 
  public get gatewayUp() {
    return this.getNumberAttribute('gateway_up');
  }
  public set gatewayUp(value: number) {
    this._gatewayUp = value;
  }
  public resetGatewayUp() {
    this._gatewayUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUpInput() {
    return this._gatewayUp;
  }

  // server_conn_limit - computed: false, optional: true, required: false
  private _serverConnLimit?: number; 
  public get serverConnLimit() {
    return this.getNumberAttribute('server_conn_limit');
  }
  public set serverConnLimit(value: number) {
    this._serverConnLimit = value;
  }
  public resetServerConnLimit() {
    this._serverConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnLimitInput() {
    return this._serverConnLimit;
  }

  // server_conn_resume - computed: false, optional: true, required: false
  private _serverConnResume?: number; 
  public get serverConnResume() {
    return this.getNumberAttribute('server_conn_resume');
  }
  public set serverConnResume(value: number) {
    this._serverConnResume = value;
  }
  public resetServerConnResume() {
    this._serverConnResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnResumeInput() {
    return this._serverConnResume;
  }

  // server_disabled - computed: false, optional: true, required: false
  private _serverDisabled?: number; 
  public get serverDisabled() {
    return this.getNumberAttribute('server_disabled');
  }
  public set serverDisabled(value: number) {
    this._serverDisabled = value;
  }
  public resetServerDisabled() {
    this._serverDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDisabledInput() {
    return this._serverDisabled;
  }

  // server_down - computed: false, optional: true, required: false
  private _serverDown?: number; 
  public get serverDown() {
    return this.getNumberAttribute('server_down');
  }
  public set serverDown(value: number) {
    this._serverDown = value;
  }
  public resetServerDown() {
    this._serverDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownInput() {
    return this._serverDown;
  }

  // server_selection_failure - computed: false, optional: true, required: false
  private _serverSelectionFailure?: number; 
  public get serverSelectionFailure() {
    return this.getNumberAttribute('server_selection_failure');
  }
  public set serverSelectionFailure(value: number) {
    this._serverSelectionFailure = value;
  }
  public resetServerSelectionFailure() {
    this._serverSelectionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailureInput() {
    return this._serverSelectionFailure;
  }

  // server_up - computed: false, optional: true, required: false
  private _serverUp?: number; 
  public get serverUp() {
    return this.getNumberAttribute('server_up');
  }
  public set serverUp(value: number) {
    this._serverUp = value;
  }
  public resetServerUp() {
    this._serverUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUpInput() {
    return this._serverUp;
  }

  // service_conn_limit - computed: false, optional: true, required: false
  private _serviceConnLimit?: number; 
  public get serviceConnLimit() {
    return this.getNumberAttribute('service_conn_limit');
  }
  public set serviceConnLimit(value: number) {
    this._serviceConnLimit = value;
  }
  public resetServiceConnLimit() {
    this._serviceConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnLimitInput() {
    return this._serviceConnLimit;
  }

  // service_conn_resume - computed: false, optional: true, required: false
  private _serviceConnResume?: number; 
  public get serviceConnResume() {
    return this.getNumberAttribute('service_conn_resume');
  }
  public set serviceConnResume(value: number) {
    this._serviceConnResume = value;
  }
  public resetServiceConnResume() {
    this._serviceConnResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnResumeInput() {
    return this._serviceConnResume;
  }

  // service_down - computed: false, optional: true, required: false
  private _serviceDown?: number; 
  public get serviceDown() {
    return this.getNumberAttribute('service_down');
  }
  public set serviceDown(value: number) {
    this._serviceDown = value;
  }
  public resetServiceDown() {
    this._serviceDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDownInput() {
    return this._serviceDown;
  }

  // service_group_down - computed: false, optional: true, required: false
  private _serviceGroupDown?: number; 
  public get serviceGroupDown() {
    return this.getNumberAttribute('service_group_down');
  }
  public set serviceGroupDown(value: number) {
    this._serviceGroupDown = value;
  }
  public resetServiceGroupDown() {
    this._serviceGroupDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupDownInput() {
    return this._serviceGroupDown;
  }

  // service_group_member_down - computed: false, optional: true, required: false
  private _serviceGroupMemberDown?: number; 
  public get serviceGroupMemberDown() {
    return this.getNumberAttribute('service_group_member_down');
  }
  public set serviceGroupMemberDown(value: number) {
    this._serviceGroupMemberDown = value;
  }
  public resetServiceGroupMemberDown() {
    this._serviceGroupMemberDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMemberDownInput() {
    return this._serviceGroupMemberDown;
  }

  // service_group_member_up - computed: false, optional: true, required: false
  private _serviceGroupMemberUp?: number; 
  public get serviceGroupMemberUp() {
    return this.getNumberAttribute('service_group_member_up');
  }
  public set serviceGroupMemberUp(value: number) {
    this._serviceGroupMemberUp = value;
  }
  public resetServiceGroupMemberUp() {
    this._serviceGroupMemberUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMemberUpInput() {
    return this._serviceGroupMemberUp;
  }

  // service_group_up - computed: false, optional: true, required: false
  private _serviceGroupUp?: number; 
  public get serviceGroupUp() {
    return this.getNumberAttribute('service_group_up');
  }
  public set serviceGroupUp(value: number) {
    this._serviceGroupUp = value;
  }
  public resetServiceGroupUp() {
    this._serviceGroupUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupUpInput() {
    return this._serviceGroupUp;
  }

  // service_up - computed: false, optional: true, required: false
  private _serviceUp?: number; 
  public get serviceUp() {
    return this.getNumberAttribute('service_up');
  }
  public set serviceUp(value: number) {
    this._serviceUp = value;
  }
  public resetServiceUp() {
    this._serviceUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUpInput() {
    return this._serviceUp;
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

  // vip_connlimit - computed: false, optional: true, required: false
  private _vipConnlimit?: number; 
  public get vipConnlimit() {
    return this.getNumberAttribute('vip_connlimit');
  }
  public set vipConnlimit(value: number) {
    this._vipConnlimit = value;
  }
  public resetVipConnlimit() {
    this._vipConnlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConnlimitInput() {
    return this._vipConnlimit;
  }

  // vip_connratelimit - computed: false, optional: true, required: false
  private _vipConnratelimit?: number; 
  public get vipConnratelimit() {
    return this.getNumberAttribute('vip_connratelimit');
  }
  public set vipConnratelimit(value: number) {
    this._vipConnratelimit = value;
  }
  public resetVipConnratelimit() {
    this._vipConnratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConnratelimitInput() {
    return this._vipConnratelimit;
  }

  // vip_down - computed: false, optional: true, required: false
  private _vipDown?: number; 
  public get vipDown() {
    return this.getNumberAttribute('vip_down');
  }
  public set vipDown(value: number) {
    this._vipDown = value;
  }
  public resetVipDown() {
    this._vipDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipDownInput() {
    return this._vipDown;
  }

  // vip_port_connlimit - computed: false, optional: true, required: false
  private _vipPortConnlimit?: number; 
  public get vipPortConnlimit() {
    return this.getNumberAttribute('vip_port_connlimit');
  }
  public set vipPortConnlimit(value: number) {
    this._vipPortConnlimit = value;
  }
  public resetVipPortConnlimit() {
    this._vipPortConnlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortConnlimitInput() {
    return this._vipPortConnlimit;
  }

  // vip_port_connratelimit - computed: false, optional: true, required: false
  private _vipPortConnratelimit?: number; 
  public get vipPortConnratelimit() {
    return this.getNumberAttribute('vip_port_connratelimit');
  }
  public set vipPortConnratelimit(value: number) {
    this._vipPortConnratelimit = value;
  }
  public resetVipPortConnratelimit() {
    this._vipPortConnratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortConnratelimitInput() {
    return this._vipPortConnratelimit;
  }

  // vip_port_down - computed: false, optional: true, required: false
  private _vipPortDown?: number; 
  public get vipPortDown() {
    return this.getNumberAttribute('vip_port_down');
  }
  public set vipPortDown(value: number) {
    this._vipPortDown = value;
  }
  public resetVipPortDown() {
    this._vipPortDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortDownInput() {
    return this._vipPortDown;
  }

  // vip_port_up - computed: false, optional: true, required: false
  private _vipPortUp?: number; 
  public get vipPortUp() {
    return this.getNumberAttribute('vip_port_up');
  }
  public set vipPortUp(value: number) {
    this._vipPortUp = value;
  }
  public resetVipPortUp() {
    this._vipPortUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortUpInput() {
    return this._vipPortUp;
  }

  // vip_up - computed: false, optional: true, required: false
  private _vipUp?: number; 
  public get vipUp() {
    return this.getNumberAttribute('vip_up');
  }
  public set vipUp(value: number) {
    this._vipUp = value;
  }
  public resetVipUp() {
    this._vipUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipUpInput() {
    return this._vipUp;
  }
}
export interface SnmpServerEnableTrapsSlbChange {
  /**
  * Enable all system group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable system connection resource event trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#connection_resource_event SnmpServerEnable#connection_resource_event}
  */
  readonly connectionResourceEvent?: number;
  /**
  * Enable partition resource usage warning trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#resource_usage_warning SnmpServerEnable#resource_usage_warning}
  */
  readonly resourceUsageWarning?: number;
  /**
  * Enable slb server create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server SnmpServerEnable#server}
  */
  readonly server?: number;
  /**
  * Enable slb server port create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_port SnmpServerEnable#server_port}
  */
  readonly serverPort?: number;
  /**
  * Enable SSL certificate change trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ssl_cert_change SnmpServerEnable#ssl_cert_change}
  */
  readonly sslCertChange?: number;
  /**
  * Enable SSL certificate expiring trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ssl_cert_expire SnmpServerEnable#ssl_cert_expire}
  */
  readonly sslCertExpire?: number;
  /**
  * Enable slb system threshold trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#system_threshold SnmpServerEnable#system_threshold}
  */
  readonly systemThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable slb vip create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip SnmpServerEnable#vip}
  */
  readonly vip?: number;
  /**
  * Enable slb vip-port create/delete trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vip_port SnmpServerEnable#vip_port}
  */
  readonly vipPort?: number;
}

export function snmpServerEnableTrapsSlbChangeToTerraform(struct?: SnmpServerEnableTrapsSlbChangeOutputReference | SnmpServerEnableTrapsSlbChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    connection_resource_event: cdktf.numberToTerraform(struct!.connectionResourceEvent),
    resource_usage_warning: cdktf.numberToTerraform(struct!.resourceUsageWarning),
    server: cdktf.numberToTerraform(struct!.server),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
    ssl_cert_change: cdktf.numberToTerraform(struct!.sslCertChange),
    ssl_cert_expire: cdktf.numberToTerraform(struct!.sslCertExpire),
    system_threshold: cdktf.numberToTerraform(struct!.systemThreshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vip: cdktf.numberToTerraform(struct!.vip),
    vip_port: cdktf.numberToTerraform(struct!.vipPort),
  }
}


export function snmpServerEnableTrapsSlbChangeToHclTerraform(struct?: SnmpServerEnableTrapsSlbChangeOutputReference | SnmpServerEnableTrapsSlbChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_resource_event: {
      value: cdktf.numberToHclTerraform(struct!.connectionResourceEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_usage_warning: {
      value: cdktf.numberToHclTerraform(struct!.resourceUsageWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.numberToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_cert_change: {
      value: cdktf.numberToHclTerraform(struct!.sslCertChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_cert_expire: {
      value: cdktf.numberToHclTerraform(struct!.sslCertExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_threshold: {
      value: cdktf.numberToHclTerraform(struct!.systemThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip: {
      value: cdktf.numberToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_port: {
      value: cdktf.numberToHclTerraform(struct!.vipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsSlbChangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSlbChange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._connectionResourceEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionResourceEvent = this._connectionResourceEvent;
    }
    if (this._resourceUsageWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUsageWarning = this._resourceUsageWarning;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    if (this._sslCertChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertChange = this._sslCertChange;
    }
    if (this._sslCertExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertExpire = this._sslCertExpire;
    }
    if (this._systemThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemThreshold = this._systemThreshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipPort = this._vipPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSlbChange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._connectionResourceEvent = undefined;
      this._resourceUsageWarning = undefined;
      this._server = undefined;
      this._serverPort = undefined;
      this._sslCertChange = undefined;
      this._sslCertExpire = undefined;
      this._systemThreshold = undefined;
      this._uuid = undefined;
      this._vip = undefined;
      this._vipPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._connectionResourceEvent = value.connectionResourceEvent;
      this._resourceUsageWarning = value.resourceUsageWarning;
      this._server = value.server;
      this._serverPort = value.serverPort;
      this._sslCertChange = value.sslCertChange;
      this._sslCertExpire = value.sslCertExpire;
      this._systemThreshold = value.systemThreshold;
      this._uuid = value.uuid;
      this._vip = value.vip;
      this._vipPort = value.vipPort;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // connection_resource_event - computed: false, optional: true, required: false
  private _connectionResourceEvent?: number; 
  public get connectionResourceEvent() {
    return this.getNumberAttribute('connection_resource_event');
  }
  public set connectionResourceEvent(value: number) {
    this._connectionResourceEvent = value;
  }
  public resetConnectionResourceEvent() {
    this._connectionResourceEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionResourceEventInput() {
    return this._connectionResourceEvent;
  }

  // resource_usage_warning - computed: false, optional: true, required: false
  private _resourceUsageWarning?: number; 
  public get resourceUsageWarning() {
    return this.getNumberAttribute('resource_usage_warning');
  }
  public set resourceUsageWarning(value: number) {
    this._resourceUsageWarning = value;
  }
  public resetResourceUsageWarning() {
    this._resourceUsageWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageWarningInput() {
    return this._resourceUsageWarning;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // ssl_cert_change - computed: false, optional: true, required: false
  private _sslCertChange?: number; 
  public get sslCertChange() {
    return this.getNumberAttribute('ssl_cert_change');
  }
  public set sslCertChange(value: number) {
    this._sslCertChange = value;
  }
  public resetSslCertChange() {
    this._sslCertChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertChangeInput() {
    return this._sslCertChange;
  }

  // ssl_cert_expire - computed: false, optional: true, required: false
  private _sslCertExpire?: number; 
  public get sslCertExpire() {
    return this.getNumberAttribute('ssl_cert_expire');
  }
  public set sslCertExpire(value: number) {
    this._sslCertExpire = value;
  }
  public resetSslCertExpire() {
    this._sslCertExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertExpireInput() {
    return this._sslCertExpire;
  }

  // system_threshold - computed: false, optional: true, required: false
  private _systemThreshold?: number; 
  public get systemThreshold() {
    return this.getNumberAttribute('system_threshold');
  }
  public set systemThreshold(value: number) {
    this._systemThreshold = value;
  }
  public resetSystemThreshold() {
    this._systemThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemThresholdInput() {
    return this._systemThreshold;
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

  // vip - computed: false, optional: true, required: false
  private _vip?: number; 
  public get vip() {
    return this.getNumberAttribute('vip');
  }
  public set vip(value: number) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_port - computed: false, optional: true, required: false
  private _vipPort?: number; 
  public get vipPort() {
    return this.getNumberAttribute('vip_port');
  }
  public set vipPort(value: number) {
    this._vipPort = value;
  }
  public resetVipPort() {
    this._vipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortInput() {
    return this._vipPort;
  }
}
export interface SnmpServerEnableTrapsSnmp {
  /**
  * Enable all SNMP group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable SNMP link-down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#linkdown SnmpServerEnable#linkdown}
  */
  readonly linkdown?: number;
  /**
  * Enable SNMP link-up trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#linkup SnmpServerEnable#linkup}
  */
  readonly linkup?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsSnmpToTerraform(struct?: SnmpServerEnableTrapsSnmpOutputReference | SnmpServerEnableTrapsSnmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    linkdown: cdktf.numberToTerraform(struct!.linkdown),
    linkup: cdktf.numberToTerraform(struct!.linkup),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsSnmpToHclTerraform(struct?: SnmpServerEnableTrapsSnmpOutputReference | SnmpServerEnableTrapsSnmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkdown: {
      value: cdktf.numberToHclTerraform(struct!.linkdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkup: {
      value: cdktf.numberToHclTerraform(struct!.linkup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsSnmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSnmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._linkdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkdown = this._linkdown;
    }
    if (this._linkup !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkup = this._linkup;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSnmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._linkdown = undefined;
      this._linkup = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._linkdown = value.linkdown;
      this._linkup = value.linkup;
      this._uuid = value.uuid;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // linkdown - computed: false, optional: true, required: false
  private _linkdown?: number; 
  public get linkdown() {
    return this.getNumberAttribute('linkdown');
  }
  public set linkdown(value: number) {
    this._linkdown = value;
  }
  public resetLinkdown() {
    this._linkdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdownInput() {
    return this._linkdown;
  }

  // linkup - computed: false, optional: true, required: false
  private _linkup?: number; 
  public get linkup() {
    return this.getNumberAttribute('linkup');
  }
  public set linkup(value: number) {
    this._linkup = value;
  }
  public resetLinkup() {
    this._linkup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkupInput() {
    return this._linkup;
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
}
export interface SnmpServerEnableTrapsSsl {
  /**
  * Enable SSL server certificate error trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#server_certificate_error SnmpServerEnable#server_certificate_error}
  */
  readonly serverCertificateError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsSslToTerraform(struct?: SnmpServerEnableTrapsSslOutputReference | SnmpServerEnableTrapsSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_certificate_error: cdktf.numberToTerraform(struct!.serverCertificateError),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsSslToHclTerraform(struct?: SnmpServerEnableTrapsSslOutputReference | SnmpServerEnableTrapsSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_certificate_error: {
      value: cdktf.numberToHclTerraform(struct!.serverCertificateError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCertificateError !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateError = this._serverCertificateError;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverCertificateError = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverCertificateError = value.serverCertificateError;
      this._uuid = value.uuid;
    }
  }

  // server_certificate_error - computed: false, optional: true, required: false
  private _serverCertificateError?: number; 
  public get serverCertificateError() {
    return this.getNumberAttribute('server_certificate_error');
  }
  public set serverCertificateError(value: number) {
    this._serverCertificateError = value;
  }
  public resetServerCertificateError() {
    this._serverCertificateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateErrorInput() {
    return this._serverCertificateError;
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
}
export interface SnmpServerEnableTrapsSystemAppsGlobal {
  /**
  * Enable CPS trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#cps_threshold SnmpServerEnable#cps_threshold}
  */
  readonly cpsThreshold?: number;
  /**
  * Enable sessions threshold trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#sessions_threshold SnmpServerEnable#sessions_threshold}
  */
  readonly sessionsThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsSystemAppsGlobalToTerraform(struct?: SnmpServerEnableTrapsSystemAppsGlobalOutputReference | SnmpServerEnableTrapsSystemAppsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cps_threshold: cdktf.numberToTerraform(struct!.cpsThreshold),
    sessions_threshold: cdktf.numberToTerraform(struct!.sessionsThreshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsSystemAppsGlobalToHclTerraform(struct?: SnmpServerEnableTrapsSystemAppsGlobalOutputReference | SnmpServerEnableTrapsSystemAppsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_threshold: {
      value: cdktf.numberToHclTerraform(struct!.sessionsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsSystemAppsGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSystemAppsGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpsThreshold = this._cpsThreshold;
    }
    if (this._sessionsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsThreshold = this._sessionsThreshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSystemAppsGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpsThreshold = undefined;
      this._sessionsThreshold = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpsThreshold = value.cpsThreshold;
      this._sessionsThreshold = value.sessionsThreshold;
      this._uuid = value.uuid;
    }
  }

  // cps_threshold - computed: false, optional: true, required: false
  private _cpsThreshold?: number; 
  public get cpsThreshold() {
    return this.getNumberAttribute('cps_threshold');
  }
  public set cpsThreshold(value: number) {
    this._cpsThreshold = value;
  }
  public resetCpsThreshold() {
    this._cpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsThresholdInput() {
    return this._cpsThreshold;
  }

  // sessions_threshold - computed: false, optional: true, required: false
  private _sessionsThreshold?: number; 
  public get sessionsThreshold() {
    return this.getNumberAttribute('sessions_threshold');
  }
  public set sessionsThreshold(value: number) {
    this._sessionsThreshold = value;
  }
  public resetSessionsThreshold() {
    this._sessionsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsThresholdInput() {
    return this._sessionsThreshold;
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
}
export interface SnmpServerEnableTrapsSystem {
  /**
  * Enable all system group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable control CPU usage high trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#control_cpu_high SnmpServerEnable#control_cpu_high}
  */
  readonly controlCpuHigh?: number;
  /**
  * Enable data CPU usage high trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#data_cpu_high SnmpServerEnable#data_cpu_high}
  */
  readonly dataCpuHigh?: number;
  /**
  * Enable system fan trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#fan SnmpServerEnable#fan}
  */
  readonly fan?: number;
  /**
  * Enable file system read-only trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#file_sys_read_only SnmpServerEnable#file_sys_read_only}
  */
  readonly fileSysReadOnly?: number;
  /**
  * Enable system high disk usage trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#high_disk_use SnmpServerEnable#high_disk_use}
  */
  readonly highDiskUse?: number;
  /**
  * Enable system high memory usage trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#high_memory_use SnmpServerEnable#high_memory_use}
  */
  readonly highMemoryUse?: number;
  /**
  * Enable system high temperature trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#high_temp SnmpServerEnable#high_temp}
  */
  readonly highTemp?: number;
  /**
  * Enable system license management traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#license_management SnmpServerEnable#license_management}
  */
  readonly licenseManagement?: number;
  /**
  * Enable system low temperature trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#low_temp SnmpServerEnable#low_temp}
  */
  readonly lowTemp?: number;
  /**
  * Enable system packet dropped trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#packet_drop SnmpServerEnable#packet_drop}
  */
  readonly packetDrop?: number;
  /**
  * Enable system power supply trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#power SnmpServerEnable#power}
  */
  readonly power?: number;
  /**
  * Enable system primary hard disk trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#pri_disk SnmpServerEnable#pri_disk}
  */
  readonly priDisk?: number;
  /**
  * Enable system restart trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#restart SnmpServerEnable#restart}
  */
  readonly restart?: number;
  /**
  * Enable system secondary hard disk trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#sec_disk SnmpServerEnable#sec_disk}
  */
  readonly secDisk?: number;
  /**
  * Enable system shutdown trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#shutdown SnmpServerEnable#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Enable system smp resource event trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#smp_resource_event SnmpServerEnable#smp_resource_event}
  */
  readonly smpResourceEvent?: number;
  /**
  * Enable system start trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#start SnmpServerEnable#start}
  */
  readonly start?: number;
  /**
  * Enable system syslog severity one messages trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#syslog_severity_one SnmpServerEnable#syslog_severity_one}
  */
  readonly syslogSeverityOne?: number;
  /**
  * Enable system TACACS monitor server up/down trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#tacacs_server_up_down SnmpServerEnable#tacacs_server_up_down}
  */
  readonly tacacsServerUpDown?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * apps_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#apps_global SnmpServerEnable#apps_global}
  */
  readonly appsGlobal?: SnmpServerEnableTrapsSystemAppsGlobal;
}

export function snmpServerEnableTrapsSystemToTerraform(struct?: SnmpServerEnableTrapsSystemOutputReference | SnmpServerEnableTrapsSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    control_cpu_high: cdktf.numberToTerraform(struct!.controlCpuHigh),
    data_cpu_high: cdktf.numberToTerraform(struct!.dataCpuHigh),
    fan: cdktf.numberToTerraform(struct!.fan),
    file_sys_read_only: cdktf.numberToTerraform(struct!.fileSysReadOnly),
    high_disk_use: cdktf.numberToTerraform(struct!.highDiskUse),
    high_memory_use: cdktf.numberToTerraform(struct!.highMemoryUse),
    high_temp: cdktf.numberToTerraform(struct!.highTemp),
    license_management: cdktf.numberToTerraform(struct!.licenseManagement),
    low_temp: cdktf.numberToTerraform(struct!.lowTemp),
    packet_drop: cdktf.numberToTerraform(struct!.packetDrop),
    power: cdktf.numberToTerraform(struct!.power),
    pri_disk: cdktf.numberToTerraform(struct!.priDisk),
    restart: cdktf.numberToTerraform(struct!.restart),
    sec_disk: cdktf.numberToTerraform(struct!.secDisk),
    shutdown: cdktf.numberToTerraform(struct!.shutdown),
    smp_resource_event: cdktf.numberToTerraform(struct!.smpResourceEvent),
    start: cdktf.numberToTerraform(struct!.start),
    syslog_severity_one: cdktf.numberToTerraform(struct!.syslogSeverityOne),
    tacacs_server_up_down: cdktf.numberToTerraform(struct!.tacacsServerUpDown),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    apps_global: snmpServerEnableTrapsSystemAppsGlobalToTerraform(struct!.appsGlobal),
  }
}


export function snmpServerEnableTrapsSystemToHclTerraform(struct?: SnmpServerEnableTrapsSystemOutputReference | SnmpServerEnableTrapsSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_cpu_high: {
      value: cdktf.numberToHclTerraform(struct!.controlCpuHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cpu_high: {
      value: cdktf.numberToHclTerraform(struct!.dataCpuHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan: {
      value: cdktf.numberToHclTerraform(struct!.fan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_sys_read_only: {
      value: cdktf.numberToHclTerraform(struct!.fileSysReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_disk_use: {
      value: cdktf.numberToHclTerraform(struct!.highDiskUse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_memory_use: {
      value: cdktf.numberToHclTerraform(struct!.highMemoryUse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_temp: {
      value: cdktf.numberToHclTerraform(struct!.highTemp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    license_management: {
      value: cdktf.numberToHclTerraform(struct!.licenseManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_temp: {
      value: cdktf.numberToHclTerraform(struct!.lowTemp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_drop: {
      value: cdktf.numberToHclTerraform(struct!.packetDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri_disk: {
      value: cdktf.numberToHclTerraform(struct!.priDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart: {
      value: cdktf.numberToHclTerraform(struct!.restart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_disk: {
      value: cdktf.numberToHclTerraform(struct!.secDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown: {
      value: cdktf.numberToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_resource_event: {
      value: cdktf.numberToHclTerraform(struct!.smpResourceEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syslog_severity_one: {
      value: cdktf.numberToHclTerraform(struct!.syslogSeverityOne),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tacacs_server_up_down: {
      value: cdktf.numberToHclTerraform(struct!.tacacsServerUpDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apps_global: {
      value: snmpServerEnableTrapsSystemAppsGlobalToHclTerraform(struct!.appsGlobal),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsSystemAppsGlobalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._controlCpuHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlCpuHigh = this._controlCpuHigh;
    }
    if (this._dataCpuHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCpuHigh = this._dataCpuHigh;
    }
    if (this._fan !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan = this._fan;
    }
    if (this._fileSysReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSysReadOnly = this._fileSysReadOnly;
    }
    if (this._highDiskUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.highDiskUse = this._highDiskUse;
    }
    if (this._highMemoryUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.highMemoryUse = this._highMemoryUse;
    }
    if (this._highTemp !== undefined) {
      hasAnyValues = true;
      internalValueResult.highTemp = this._highTemp;
    }
    if (this._licenseManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseManagement = this._licenseManagement;
    }
    if (this._lowTemp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowTemp = this._lowTemp;
    }
    if (this._packetDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDrop = this._packetDrop;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._priDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.priDisk = this._priDisk;
    }
    if (this._restart !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart;
    }
    if (this._secDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.secDisk = this._secDisk;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._smpResourceEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpResourceEvent = this._smpResourceEvent;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._syslogSeverityOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogSeverityOne = this._syslogSeverityOne;
    }
    if (this._tacacsServerUpDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacacsServerUpDown = this._tacacsServerUpDown;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._appsGlobal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsGlobal = this._appsGlobal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._controlCpuHigh = undefined;
      this._dataCpuHigh = undefined;
      this._fan = undefined;
      this._fileSysReadOnly = undefined;
      this._highDiskUse = undefined;
      this._highMemoryUse = undefined;
      this._highTemp = undefined;
      this._licenseManagement = undefined;
      this._lowTemp = undefined;
      this._packetDrop = undefined;
      this._power = undefined;
      this._priDisk = undefined;
      this._restart = undefined;
      this._secDisk = undefined;
      this._shutdown = undefined;
      this._smpResourceEvent = undefined;
      this._start = undefined;
      this._syslogSeverityOne = undefined;
      this._tacacsServerUpDown = undefined;
      this._uuid = undefined;
      this._appsGlobal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._controlCpuHigh = value.controlCpuHigh;
      this._dataCpuHigh = value.dataCpuHigh;
      this._fan = value.fan;
      this._fileSysReadOnly = value.fileSysReadOnly;
      this._highDiskUse = value.highDiskUse;
      this._highMemoryUse = value.highMemoryUse;
      this._highTemp = value.highTemp;
      this._licenseManagement = value.licenseManagement;
      this._lowTemp = value.lowTemp;
      this._packetDrop = value.packetDrop;
      this._power = value.power;
      this._priDisk = value.priDisk;
      this._restart = value.restart;
      this._secDisk = value.secDisk;
      this._shutdown = value.shutdown;
      this._smpResourceEvent = value.smpResourceEvent;
      this._start = value.start;
      this._syslogSeverityOne = value.syslogSeverityOne;
      this._tacacsServerUpDown = value.tacacsServerUpDown;
      this._uuid = value.uuid;
      this._appsGlobal.internalValue = value.appsGlobal;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // control_cpu_high - computed: false, optional: true, required: false
  private _controlCpuHigh?: number; 
  public get controlCpuHigh() {
    return this.getNumberAttribute('control_cpu_high');
  }
  public set controlCpuHigh(value: number) {
    this._controlCpuHigh = value;
  }
  public resetControlCpuHigh() {
    this._controlCpuHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlCpuHighInput() {
    return this._controlCpuHigh;
  }

  // data_cpu_high - computed: false, optional: true, required: false
  private _dataCpuHigh?: number; 
  public get dataCpuHigh() {
    return this.getNumberAttribute('data_cpu_high');
  }
  public set dataCpuHigh(value: number) {
    this._dataCpuHigh = value;
  }
  public resetDataCpuHigh() {
    this._dataCpuHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCpuHighInput() {
    return this._dataCpuHigh;
  }

  // fan - computed: false, optional: true, required: false
  private _fan?: number; 
  public get fan() {
    return this.getNumberAttribute('fan');
  }
  public set fan(value: number) {
    this._fan = value;
  }
  public resetFan() {
    this._fan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fanInput() {
    return this._fan;
  }

  // file_sys_read_only - computed: false, optional: true, required: false
  private _fileSysReadOnly?: number; 
  public get fileSysReadOnly() {
    return this.getNumberAttribute('file_sys_read_only');
  }
  public set fileSysReadOnly(value: number) {
    this._fileSysReadOnly = value;
  }
  public resetFileSysReadOnly() {
    this._fileSysReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSysReadOnlyInput() {
    return this._fileSysReadOnly;
  }

  // high_disk_use - computed: false, optional: true, required: false
  private _highDiskUse?: number; 
  public get highDiskUse() {
    return this.getNumberAttribute('high_disk_use');
  }
  public set highDiskUse(value: number) {
    this._highDiskUse = value;
  }
  public resetHighDiskUse() {
    this._highDiskUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highDiskUseInput() {
    return this._highDiskUse;
  }

  // high_memory_use - computed: false, optional: true, required: false
  private _highMemoryUse?: number; 
  public get highMemoryUse() {
    return this.getNumberAttribute('high_memory_use');
  }
  public set highMemoryUse(value: number) {
    this._highMemoryUse = value;
  }
  public resetHighMemoryUse() {
    this._highMemoryUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highMemoryUseInput() {
    return this._highMemoryUse;
  }

  // high_temp - computed: false, optional: true, required: false
  private _highTemp?: number; 
  public get highTemp() {
    return this.getNumberAttribute('high_temp');
  }
  public set highTemp(value: number) {
    this._highTemp = value;
  }
  public resetHighTemp() {
    this._highTemp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highTempInput() {
    return this._highTemp;
  }

  // license_management - computed: false, optional: true, required: false
  private _licenseManagement?: number; 
  public get licenseManagement() {
    return this.getNumberAttribute('license_management');
  }
  public set licenseManagement(value: number) {
    this._licenseManagement = value;
  }
  public resetLicenseManagement() {
    this._licenseManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseManagementInput() {
    return this._licenseManagement;
  }

  // low_temp - computed: false, optional: true, required: false
  private _lowTemp?: number; 
  public get lowTemp() {
    return this.getNumberAttribute('low_temp');
  }
  public set lowTemp(value: number) {
    this._lowTemp = value;
  }
  public resetLowTemp() {
    this._lowTemp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowTempInput() {
    return this._lowTemp;
  }

  // packet_drop - computed: false, optional: true, required: false
  private _packetDrop?: number; 
  public get packetDrop() {
    return this.getNumberAttribute('packet_drop');
  }
  public set packetDrop(value: number) {
    this._packetDrop = value;
  }
  public resetPacketDrop() {
    this._packetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDropInput() {
    return this._packetDrop;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // pri_disk - computed: false, optional: true, required: false
  private _priDisk?: number; 
  public get priDisk() {
    return this.getNumberAttribute('pri_disk');
  }
  public set priDisk(value: number) {
    this._priDisk = value;
  }
  public resetPriDisk() {
    this._priDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priDiskInput() {
    return this._priDisk;
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: number; 
  public get restart() {
    return this.getNumberAttribute('restart');
  }
  public set restart(value: number) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // sec_disk - computed: false, optional: true, required: false
  private _secDisk?: number; 
  public get secDisk() {
    return this.getNumberAttribute('sec_disk');
  }
  public set secDisk(value: number) {
    this._secDisk = value;
  }
  public resetSecDisk() {
    this._secDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secDiskInput() {
    return this._secDisk;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: number; 
  public get shutdown() {
    return this.getNumberAttribute('shutdown');
  }
  public set shutdown(value: number) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // smp_resource_event - computed: false, optional: true, required: false
  private _smpResourceEvent?: number; 
  public get smpResourceEvent() {
    return this.getNumberAttribute('smp_resource_event');
  }
  public set smpResourceEvent(value: number) {
    this._smpResourceEvent = value;
  }
  public resetSmpResourceEvent() {
    this._smpResourceEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpResourceEventInput() {
    return this._smpResourceEvent;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // syslog_severity_one - computed: false, optional: true, required: false
  private _syslogSeverityOne?: number; 
  public get syslogSeverityOne() {
    return this.getNumberAttribute('syslog_severity_one');
  }
  public set syslogSeverityOne(value: number) {
    this._syslogSeverityOne = value;
  }
  public resetSyslogSeverityOne() {
    this._syslogSeverityOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSeverityOneInput() {
    return this._syslogSeverityOne;
  }

  // tacacs_server_up_down - computed: false, optional: true, required: false
  private _tacacsServerUpDown?: number; 
  public get tacacsServerUpDown() {
    return this.getNumberAttribute('tacacs_server_up_down');
  }
  public set tacacsServerUpDown(value: number) {
    this._tacacsServerUpDown = value;
  }
  public resetTacacsServerUpDown() {
    this._tacacsServerUpDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsServerUpDownInput() {
    return this._tacacsServerUpDown;
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

  // apps_global - computed: false, optional: true, required: false
  private _appsGlobal = new SnmpServerEnableTrapsSystemAppsGlobalOutputReference(this, "apps_global");
  public get appsGlobal() {
    return this._appsGlobal;
  }
  public putAppsGlobal(value: SnmpServerEnableTrapsSystemAppsGlobal) {
    this._appsGlobal.internalValue = value;
  }
  public resetAppsGlobal() {
    this._appsGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsGlobalInput() {
    return this._appsGlobal.internalValue;
  }
}
export interface SnmpServerEnableTrapsVcs {
  /**
  * Enable VCS state change trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#state_change SnmpServerEnable#state_change}
  */
  readonly stateChange?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsVcsToTerraform(struct?: SnmpServerEnableTrapsVcsOutputReference | SnmpServerEnableTrapsVcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state_change: cdktf.numberToTerraform(struct!.stateChange),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsVcsToHclTerraform(struct?: SnmpServerEnableTrapsVcsOutputReference | SnmpServerEnableTrapsVcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state_change: {
      value: cdktf.numberToHclTerraform(struct!.stateChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsVcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsVcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateChange = this._stateChange;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsVcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stateChange = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stateChange = value.stateChange;
      this._uuid = value.uuid;
    }
  }

  // state_change - computed: false, optional: true, required: false
  private _stateChange?: number; 
  public get stateChange() {
    return this.getNumberAttribute('state_change');
  }
  public set stateChange(value: number) {
    this._stateChange = value;
  }
  public resetStateChange() {
    this._stateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateChangeInput() {
    return this._stateChange;
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
}
export interface SnmpServerEnableTrapsVrrpA {
  /**
  * Enable VRRP-A active trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#active SnmpServerEnable#active}
  */
  readonly active?: number;
  /**
  * Enable all VRRP-A group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable VRRP-A standby trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#standby SnmpServerEnable#standby}
  */
  readonly standby?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsVrrpAToTerraform(struct?: SnmpServerEnableTrapsVrrpAOutputReference | SnmpServerEnableTrapsVrrpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.numberToTerraform(struct!.active),
    all: cdktf.numberToTerraform(struct!.all),
    standby: cdktf.numberToTerraform(struct!.standby),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsVrrpAToHclTerraform(struct?: SnmpServerEnableTrapsVrrpAOutputReference | SnmpServerEnableTrapsVrrpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.numberToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby: {
      value: cdktf.numberToHclTerraform(struct!.standby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsVrrpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsVrrpA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._standby !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsVrrpA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._all = undefined;
      this._standby = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._all = value.all;
      this._standby = value.standby;
      this._uuid = value.uuid;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: number; 
  public get active() {
    return this.getNumberAttribute('active');
  }
  public set active(value: number) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // standby - computed: false, optional: true, required: false
  private _standby?: number; 
  public get standby() {
    return this.getNumberAttribute('standby');
  }
  public set standby(value: number) {
    this._standby = value;
  }
  public resetStandby() {
    this._standby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby;
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
}
export interface SnmpServerEnableTraps {
  /**
  * Enable all SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#all SnmpServerEnable#all}
  */
  readonly all?: number;
  /**
  * Enable lldp traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#lldp SnmpServerEnable#lldp}
  */
  readonly lldp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#uuid SnmpServerEnable#uuid}
  */
  readonly uuid?: string;
  /**
  * gslb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#gslb SnmpServerEnable#gslb}
  */
  readonly gslb?: SnmpServerEnableTrapsGslb;
  /**
  * lsn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#lsn SnmpServerEnable#lsn}
  */
  readonly lsn?: SnmpServerEnableTrapsLsn;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#network SnmpServerEnable#network}
  */
  readonly network?: SnmpServerEnableTrapsNetwork;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#routing SnmpServerEnable#routing}
  */
  readonly routing?: SnmpServerEnableTrapsRouting;
  /**
  * scaleout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#scaleout SnmpServerEnable#scaleout}
  */
  readonly scaleout?: SnmpServerEnableTrapsScaleout;
  /**
  * slb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#slb SnmpServerEnable#slb}
  */
  readonly slb?: SnmpServerEnableTrapsSlb;
  /**
  * slb_change block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#slb_change SnmpServerEnable#slb_change}
  */
  readonly slbChange?: SnmpServerEnableTrapsSlbChange;
  /**
  * snmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#snmp SnmpServerEnable#snmp}
  */
  readonly snmp?: SnmpServerEnableTrapsSnmp;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#ssl SnmpServerEnable#ssl}
  */
  readonly ssl?: SnmpServerEnableTrapsSsl;
  /**
  * system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#system SnmpServerEnable#system}
  */
  readonly systemAttribute?: SnmpServerEnableTrapsSystem;
  /**
  * vcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vcs SnmpServerEnable#vcs}
  */
  readonly vcs?: SnmpServerEnableTrapsVcs;
  /**
  * vrrp_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#vrrp_a SnmpServerEnable#vrrp_a}
  */
  readonly vrrpA?: SnmpServerEnableTrapsVrrpA;
}

export function snmpServerEnableTrapsToTerraform(struct?: SnmpServerEnableTrapsOutputReference | SnmpServerEnableTraps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    lldp: cdktf.numberToTerraform(struct!.lldp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    gslb: snmpServerEnableTrapsGslbToTerraform(struct!.gslb),
    lsn: snmpServerEnableTrapsLsnToTerraform(struct!.lsn),
    network: snmpServerEnableTrapsNetworkToTerraform(struct!.network),
    routing: snmpServerEnableTrapsRoutingToTerraform(struct!.routing),
    scaleout: snmpServerEnableTrapsScaleoutToTerraform(struct!.scaleout),
    slb: snmpServerEnableTrapsSlbToTerraform(struct!.slb),
    slb_change: snmpServerEnableTrapsSlbChangeToTerraform(struct!.slbChange),
    snmp: snmpServerEnableTrapsSnmpToTerraform(struct!.snmp),
    ssl: snmpServerEnableTrapsSslToTerraform(struct!.ssl),
    system: snmpServerEnableTrapsSystemToTerraform(struct!.systemAttribute),
    vcs: snmpServerEnableTrapsVcsToTerraform(struct!.vcs),
    vrrp_a: snmpServerEnableTrapsVrrpAToTerraform(struct!.vrrpA),
  }
}


export function snmpServerEnableTrapsToHclTerraform(struct?: SnmpServerEnableTrapsOutputReference | SnmpServerEnableTraps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lldp: {
      value: cdktf.numberToHclTerraform(struct!.lldp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb: {
      value: snmpServerEnableTrapsGslbToHclTerraform(struct!.gslb),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsGslbList",
    },
    lsn: {
      value: snmpServerEnableTrapsLsnToHclTerraform(struct!.lsn),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsLsnList",
    },
    network: {
      value: snmpServerEnableTrapsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsNetworkList",
    },
    routing: {
      value: snmpServerEnableTrapsRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsRoutingList",
    },
    scaleout: {
      value: snmpServerEnableTrapsScaleoutToHclTerraform(struct!.scaleout),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsScaleoutList",
    },
    slb: {
      value: snmpServerEnableTrapsSlbToHclTerraform(struct!.slb),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsSlbList",
    },
    slb_change: {
      value: snmpServerEnableTrapsSlbChangeToHclTerraform(struct!.slbChange),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsSlbChangeList",
    },
    snmp: {
      value: snmpServerEnableTrapsSnmpToHclTerraform(struct!.snmp),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsSnmpList",
    },
    ssl: {
      value: snmpServerEnableTrapsSslToHclTerraform(struct!.ssl),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsSslList",
    },
    system: {
      value: snmpServerEnableTrapsSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsSystemList",
    },
    vcs: {
      value: snmpServerEnableTrapsVcsToHclTerraform(struct!.vcs),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsVcsList",
    },
    vrrp_a: {
      value: snmpServerEnableTrapsVrrpAToHclTerraform(struct!.vrrpA),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerEnableTrapsVrrpAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTraps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._lldp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldp = this._lldp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._gslb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslb = this._gslb?.internalValue;
    }
    if (this._lsn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsn = this._lsn?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    if (this._scaleout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleout = this._scaleout?.internalValue;
    }
    if (this._slb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slb = this._slb?.internalValue;
    }
    if (this._slbChange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbChange = this._slbChange?.internalValue;
    }
    if (this._snmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp = this._snmp?.internalValue;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._vcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcs = this._vcs?.internalValue;
    }
    if (this._vrrpA?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpA = this._vrrpA?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTraps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._lldp = undefined;
      this._uuid = undefined;
      this._gslb.internalValue = undefined;
      this._lsn.internalValue = undefined;
      this._network.internalValue = undefined;
      this._routing.internalValue = undefined;
      this._scaleout.internalValue = undefined;
      this._slb.internalValue = undefined;
      this._slbChange.internalValue = undefined;
      this._snmp.internalValue = undefined;
      this._ssl.internalValue = undefined;
      this._system.internalValue = undefined;
      this._vcs.internalValue = undefined;
      this._vrrpA.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._lldp = value.lldp;
      this._uuid = value.uuid;
      this._gslb.internalValue = value.gslb;
      this._lsn.internalValue = value.lsn;
      this._network.internalValue = value.network;
      this._routing.internalValue = value.routing;
      this._scaleout.internalValue = value.scaleout;
      this._slb.internalValue = value.slb;
      this._slbChange.internalValue = value.slbChange;
      this._snmp.internalValue = value.snmp;
      this._ssl.internalValue = value.ssl;
      this._system.internalValue = value.systemAttribute;
      this._vcs.internalValue = value.vcs;
      this._vrrpA.internalValue = value.vrrpA;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // lldp - computed: false, optional: true, required: false
  private _lldp?: number; 
  public get lldp() {
    return this.getNumberAttribute('lldp');
  }
  public set lldp(value: number) {
    this._lldp = value;
  }
  public resetLldp() {
    this._lldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp;
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

  // gslb - computed: false, optional: true, required: false
  private _gslb = new SnmpServerEnableTrapsGslbOutputReference(this, "gslb");
  public get gslb() {
    return this._gslb;
  }
  public putGslb(value: SnmpServerEnableTrapsGslb) {
    this._gslb.internalValue = value;
  }
  public resetGslb() {
    this._gslb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbInput() {
    return this._gslb.internalValue;
  }

  // lsn - computed: false, optional: true, required: false
  private _lsn = new SnmpServerEnableTrapsLsnOutputReference(this, "lsn");
  public get lsn() {
    return this._lsn;
  }
  public putLsn(value: SnmpServerEnableTrapsLsn) {
    this._lsn.internalValue = value;
  }
  public resetLsn() {
    this._lsn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnInput() {
    return this._lsn.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new SnmpServerEnableTrapsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: SnmpServerEnableTrapsNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new SnmpServerEnableTrapsRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: SnmpServerEnableTrapsRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // scaleout - computed: false, optional: true, required: false
  private _scaleout = new SnmpServerEnableTrapsScaleoutOutputReference(this, "scaleout");
  public get scaleout() {
    return this._scaleout;
  }
  public putScaleout(value: SnmpServerEnableTrapsScaleout) {
    this._scaleout.internalValue = value;
  }
  public resetScaleout() {
    this._scaleout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutInput() {
    return this._scaleout.internalValue;
  }

  // slb - computed: false, optional: true, required: false
  private _slb = new SnmpServerEnableTrapsSlbOutputReference(this, "slb");
  public get slb() {
    return this._slb;
  }
  public putSlb(value: SnmpServerEnableTrapsSlb) {
    this._slb.internalValue = value;
  }
  public resetSlb() {
    this._slb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInput() {
    return this._slb.internalValue;
  }

  // slb_change - computed: false, optional: true, required: false
  private _slbChange = new SnmpServerEnableTrapsSlbChangeOutputReference(this, "slb_change");
  public get slbChange() {
    return this._slbChange;
  }
  public putSlbChange(value: SnmpServerEnableTrapsSlbChange) {
    this._slbChange.internalValue = value;
  }
  public resetSlbChange() {
    this._slbChange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbChangeInput() {
    return this._slbChange.internalValue;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp = new SnmpServerEnableTrapsSnmpOutputReference(this, "snmp");
  public get snmp() {
    return this._snmp;
  }
  public putSnmp(value: SnmpServerEnableTrapsSnmp) {
    this._snmp.internalValue = value;
  }
  public resetSnmp() {
    this._snmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new SnmpServerEnableTrapsSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: SnmpServerEnableTrapsSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // system - computed: false, optional: true, required: false
  private _system = new SnmpServerEnableTrapsSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: SnmpServerEnableTrapsSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // vcs - computed: false, optional: true, required: false
  private _vcs = new SnmpServerEnableTrapsVcsOutputReference(this, "vcs");
  public get vcs() {
    return this._vcs;
  }
  public putVcs(value: SnmpServerEnableTrapsVcs) {
    this._vcs.internalValue = value;
  }
  public resetVcs() {
    this._vcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsInput() {
    return this._vcs.internalValue;
  }

  // vrrp_a - computed: false, optional: true, required: false
  private _vrrpA = new SnmpServerEnableTrapsVrrpAOutputReference(this, "vrrp_a");
  public get vrrpA() {
    return this._vrrpA;
  }
  public putVrrpA(value: SnmpServerEnableTrapsVrrpA) {
    this._vrrpA.internalValue = value;
  }
  public resetVrrpA() {
    this._vrrpA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpAInput() {
    return this._vrrpA.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable thunder_snmp_server_enable}
*/
export class SnmpServerEnable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnable to import
  * @param importFromId The id of the existing SnmpServerEnable that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable thunder_snmp_server_enable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._service = config.service;
    this._uuid = config.uuid;
    this._traps.internalValue = config.traps;
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

  // service - computed: false, optional: true, required: false
  private _service?: number; 
  public get service() {
    return this.getNumberAttribute('service');
  }
  public set service(value: number) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // traps - computed: false, optional: true, required: false
  private _traps = new SnmpServerEnableTrapsOutputReference(this, "traps");
  public get traps() {
    return this._traps;
  }
  public putTraps(value: SnmpServerEnableTraps) {
    this._traps.internalValue = value;
  }
  public resetTraps() {
    this._traps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsInput() {
    return this._traps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service: cdktf.numberToTerraform(this._service),
      uuid: cdktf.stringToTerraform(this._uuid),
      traps: snmpServerEnableTrapsToTerraform(this._traps.internalValue),
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
      service: {
        value: cdktf.numberToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traps: {
        value: snmpServerEnableTrapsToHclTerraform(this._traps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerEnableTrapsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
