// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectGlobalIpsSensorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#adom ObjectGlobalIpsSensor#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#block_malicious_url ObjectGlobalIpsSensor#block_malicious_url}
  */
  readonly blockMaliciousUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#comment ObjectGlobalIpsSensor#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#dynamic_sort_subtable ObjectGlobalIpsSensor#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#extended_log ObjectGlobalIpsSensor#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#id ObjectGlobalIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log ObjectGlobalIpsSensor#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#name ObjectGlobalIpsSensor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#replacemsg_group ObjectGlobalIpsSensor#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#scan_botnet_connections ObjectGlobalIpsSensor#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#scopetype ObjectGlobalIpsSensor#scopetype}
  */
  readonly scopetype?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#entries ObjectGlobalIpsSensor#entries}
  */
  readonly entries?: ObjectGlobalIpsSensorEntries[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#filter ObjectGlobalIpsSensor#filter}
  */
  readonly filter?: ObjectGlobalIpsSensorFilter[] | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#override ObjectGlobalIpsSensor#override}
  */
  readonly override?: ObjectGlobalIpsSensorOverride[] | cdktf.IResolvable;
}
export interface ObjectGlobalIpsSensorEntriesExemptIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#dst_ip ObjectGlobalIpsSensor#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#id ObjectGlobalIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#src_ip ObjectGlobalIpsSensor#src_ip}
  */
  readonly srcIp?: string;
}

export function objectGlobalIpsSensorEntriesExemptIpToTerraform(struct?: ObjectGlobalIpsSensorEntriesExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    id: cdktf.numberToTerraform(struct!.id),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
  }
}


export function objectGlobalIpsSensorEntriesExemptIpToHclTerraform(struct?: ObjectGlobalIpsSensorEntriesExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGlobalIpsSensorEntriesExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGlobalIpsSensorEntriesExemptIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGlobalIpsSensorEntriesExemptIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIp = undefined;
      this._id = undefined;
      this._srcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIp = value.dstIp;
      this._id = value.id;
      this._srcIp = value.srcIp;
    }
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }
}

export class ObjectGlobalIpsSensorEntriesExemptIpList extends cdktf.ComplexList {
  public internalValue? : ObjectGlobalIpsSensorEntriesExemptIp[] | cdktf.IResolvable

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
  public get(index: number): ObjectGlobalIpsSensorEntriesExemptIpOutputReference {
    return new ObjectGlobalIpsSensorEntriesExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectGlobalIpsSensorEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#action ObjectGlobalIpsSensor#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#application ObjectGlobalIpsSensor#application}
  */
  readonly application?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#cve ObjectGlobalIpsSensor#cve}
  */
  readonly cve?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#default_action ObjectGlobalIpsSensor#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#default_status ObjectGlobalIpsSensor#default_status}
  */
  readonly defaultStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#id ObjectGlobalIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#last_modified ObjectGlobalIpsSensor#last_modified}
  */
  readonly lastModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#location ObjectGlobalIpsSensor#location}
  */
  readonly location?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log ObjectGlobalIpsSensor#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log_attack_context ObjectGlobalIpsSensor#log_attack_context}
  */
  readonly logAttackContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log_packet ObjectGlobalIpsSensor#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#os ObjectGlobalIpsSensor#os}
  */
  readonly os?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#position ObjectGlobalIpsSensor#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#protocol ObjectGlobalIpsSensor#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine ObjectGlobalIpsSensor#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine_expiry ObjectGlobalIpsSensor#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine_log ObjectGlobalIpsSensor#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#rate_count ObjectGlobalIpsSensor#rate_count}
  */
  readonly rateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#rate_duration ObjectGlobalIpsSensor#rate_duration}
  */
  readonly rateDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#rate_mode ObjectGlobalIpsSensor#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#rate_track ObjectGlobalIpsSensor#rate_track}
  */
  readonly rateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#rule ObjectGlobalIpsSensor#rule}
  */
  readonly rule?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#severity ObjectGlobalIpsSensor#severity}
  */
  readonly severity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#status ObjectGlobalIpsSensor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#tags ObjectGlobalIpsSensor#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#vuln_type ObjectGlobalIpsSensor#vuln_type}
  */
  readonly vulnType?: number[];
  /**
  * exempt_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#exempt_ip ObjectGlobalIpsSensor#exempt_ip}
  */
  readonly exemptIp?: ObjectGlobalIpsSensorEntriesExemptIp[] | cdktf.IResolvable;
}

export function objectGlobalIpsSensorEntriesToTerraform(struct?: ObjectGlobalIpsSensorEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    cve: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cve),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    default_status: cdktf.stringToTerraform(struct!.defaultStatus),
    id: cdktf.numberToTerraform(struct!.id),
    last_modified: cdktf.stringToTerraform(struct!.lastModified),
    location: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.location),
    log: cdktf.stringToTerraform(struct!.log),
    log_attack_context: cdktf.stringToTerraform(struct!.logAttackContext),
    log_packet: cdktf.stringToTerraform(struct!.logPacket),
    os: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.os),
    position: cdktf.stringToTerraform(struct!.position),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.stringToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    rate_count: cdktf.numberToTerraform(struct!.rateCount),
    rate_duration: cdktf.numberToTerraform(struct!.rateDuration),
    rate_mode: cdktf.stringToTerraform(struct!.rateMode),
    rate_track: cdktf.stringToTerraform(struct!.rateTrack),
    rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rule),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    vuln_type: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vulnType),
    exempt_ip: cdktf.listMapper(objectGlobalIpsSensorEntriesExemptIpToTerraform, true)(struct!.exemptIp),
  }
}


export function objectGlobalIpsSensorEntriesToHclTerraform(struct?: ObjectGlobalIpsSensorEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cve: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cve),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_status: {
      value: cdktf.stringToHclTerraform(struct!.defaultStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_modified: {
      value: cdktf.stringToHclTerraform(struct!.lastModified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.location),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_attack_context: {
      value: cdktf.stringToHclTerraform(struct!.logAttackContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_packet: {
      value: cdktf.stringToHclTerraform(struct!.logPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.os),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.stringToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_count: {
      value: cdktf.numberToHclTerraform(struct!.rateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_duration: {
      value: cdktf.numberToHclTerraform(struct!.rateDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_mode: {
      value: cdktf.stringToHclTerraform(struct!.rateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_track: {
      value: cdktf.stringToHclTerraform(struct!.rateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rule),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vuln_type: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vulnType),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(objectGlobalIpsSensorEntriesExemptIpToHclTerraform, true)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectGlobalIpsSensorEntriesExemptIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGlobalIpsSensorEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGlobalIpsSensorEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._cve !== undefined) {
      hasAnyValues = true;
      internalValueResult.cve = this._cve;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._defaultStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStatus = this._defaultStatus;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lastModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModified = this._lastModified;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logAttackContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAttackContext = this._logAttackContext;
    }
    if (this._logPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPacket = this._logPacket;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._rateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateCount = this._rateCount;
    }
    if (this._rateDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateDuration = this._rateDuration;
    }
    if (this._rateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateMode = this._rateMode;
    }
    if (this._rateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateTrack = this._rateTrack;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vulnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnType = this._vulnType;
    }
    if (this._exemptIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptIp = this._exemptIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGlobalIpsSensorEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._application = undefined;
      this._cve = undefined;
      this._defaultAction = undefined;
      this._defaultStatus = undefined;
      this._id = undefined;
      this._lastModified = undefined;
      this._location = undefined;
      this._log = undefined;
      this._logAttackContext = undefined;
      this._logPacket = undefined;
      this._os = undefined;
      this._position = undefined;
      this._protocol = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._rateCount = undefined;
      this._rateDuration = undefined;
      this._rateMode = undefined;
      this._rateTrack = undefined;
      this._rule = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._tags = undefined;
      this._vulnType = undefined;
      this._exemptIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._application = value.application;
      this._cve = value.cve;
      this._defaultAction = value.defaultAction;
      this._defaultStatus = value.defaultStatus;
      this._id = value.id;
      this._lastModified = value.lastModified;
      this._location = value.location;
      this._log = value.log;
      this._logAttackContext = value.logAttackContext;
      this._logPacket = value.logPacket;
      this._os = value.os;
      this._position = value.position;
      this._protocol = value.protocol;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._rateCount = value.rateCount;
      this._rateDuration = value.rateDuration;
      this._rateMode = value.rateMode;
      this._rateTrack = value.rateTrack;
      this._rule = value.rule;
      this._severity = value.severity;
      this._status = value.status;
      this._tags = value.tags;
      this._vulnType = value.vulnType;
      this._exemptIp.internalValue = value.exemptIp;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application - computed: true, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return cdktf.Fn.tolist(this.getListAttribute('application'));
  }
  public set application(value: string[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // cve - computed: true, optional: true, required: false
  private _cve?: string[]; 
  public get cve() {
    return cdktf.Fn.tolist(this.getListAttribute('cve'));
  }
  public set cve(value: string[]) {
    this._cve = value;
  }
  public resetCve() {
    this._cve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve;
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // default_status - computed: true, optional: true, required: false
  private _defaultStatus?: string; 
  public get defaultStatus() {
    return this.getStringAttribute('default_status');
  }
  public set defaultStatus(value: string) {
    this._defaultStatus = value;
  }
  public resetDefaultStatus() {
    this._defaultStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStatusInput() {
    return this._defaultStatus;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified - computed: false, optional: true, required: false
  private _lastModified?: string; 
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }
  public set lastModified(value: string) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_attack_context - computed: true, optional: true, required: false
  private _logAttackContext?: string; 
  public get logAttackContext() {
    return this.getStringAttribute('log_attack_context');
  }
  public set logAttackContext(value: string) {
    this._logAttackContext = value;
  }
  public resetLogAttackContext() {
    this._logAttackContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAttackContextInput() {
    return this._logAttackContext;
  }

  // log_packet - computed: true, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string[]; 
  public get os() {
    return cdktf.Fn.tolist(this.getListAttribute('os'));
  }
  public set os(value: string[]) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: false, optional: true, required: false
  private _quarantineExpiry?: string; 
  public get quarantineExpiry() {
    return this.getStringAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: string) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: false, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // rate_count - computed: false, optional: true, required: false
  private _rateCount?: number; 
  public get rateCount() {
    return this.getNumberAttribute('rate_count');
  }
  public set rateCount(value: number) {
    this._rateCount = value;
  }
  public resetRateCount() {
    this._rateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCountInput() {
    return this._rateCount;
  }

  // rate_duration - computed: false, optional: true, required: false
  private _rateDuration?: number; 
  public get rateDuration() {
    return this.getNumberAttribute('rate_duration');
  }
  public set rateDuration(value: number) {
    this._rateDuration = value;
  }
  public resetRateDuration() {
    this._rateDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateDurationInput() {
    return this._rateDuration;
  }

  // rate_mode - computed: false, optional: true, required: false
  private _rateMode?: string; 
  public get rateMode() {
    return this.getStringAttribute('rate_mode');
  }
  public set rateMode(value: string) {
    this._rateMode = value;
  }
  public resetRateMode() {
    this._rateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateModeInput() {
    return this._rateMode;
  }

  // rate_track - computed: false, optional: true, required: false
  private _rateTrack?: string; 
  public get rateTrack() {
    return this.getStringAttribute('rate_track');
  }
  public set rateTrack(value: string) {
    this._rateTrack = value;
  }
  public resetRateTrack() {
    this._rateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateTrackInput() {
    return this._rateTrack;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string[]; 
  public get rule() {
    return cdktf.Fn.tolist(this.getListAttribute('rule'));
  }
  public set rule(value: string[]) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return cdktf.Fn.tolist(this.getListAttribute('severity'));
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vuln_type - computed: true, optional: true, required: false
  private _vulnType?: number[]; 
  public get vulnType() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vuln_type')));
  }
  public set vulnType(value: number[]) {
    this._vulnType = value;
  }
  public resetVulnType() {
    this._vulnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnTypeInput() {
    return this._vulnType;
  }

  // exempt_ip - computed: false, optional: true, required: false
  private _exemptIp = new ObjectGlobalIpsSensorEntriesExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: ObjectGlobalIpsSensorEntriesExemptIp[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
  }
}

export class ObjectGlobalIpsSensorEntriesList extends cdktf.ComplexList {
  public internalValue? : ObjectGlobalIpsSensorEntries[] | cdktf.IResolvable

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
  public get(index: number): ObjectGlobalIpsSensorEntriesOutputReference {
    return new ObjectGlobalIpsSensorEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectGlobalIpsSensorFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#action ObjectGlobalIpsSensor#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#application ObjectGlobalIpsSensor#application}
  */
  readonly application?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#applicationreal ObjectGlobalIpsSensor#applicationreal}
  */
  readonly applicationreal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#location ObjectGlobalIpsSensor#location}
  */
  readonly location?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#locationreal ObjectGlobalIpsSensor#locationreal}
  */
  readonly locationreal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log ObjectGlobalIpsSensor#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log_packet ObjectGlobalIpsSensor#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#name ObjectGlobalIpsSensor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#os ObjectGlobalIpsSensor#os}
  */
  readonly os?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#osreal ObjectGlobalIpsSensor#osreal}
  */
  readonly osreal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#protocol ObjectGlobalIpsSensor#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#protocolreal ObjectGlobalIpsSensor#protocolreal}
  */
  readonly protocolreal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine ObjectGlobalIpsSensor#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine_expiry ObjectGlobalIpsSensor#quarantine_expiry}
  */
  readonly quarantineExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine_log ObjectGlobalIpsSensor#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#severity ObjectGlobalIpsSensor#severity}
  */
  readonly severity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#severityreal ObjectGlobalIpsSensor#severityreal}
  */
  readonly severityreal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#status ObjectGlobalIpsSensor#status}
  */
  readonly status?: string;
}

export function objectGlobalIpsSensorFilterToTerraform(struct?: ObjectGlobalIpsSensorFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    applicationreal: cdktf.stringToTerraform(struct!.applicationreal),
    location: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.location),
    locationreal: cdktf.stringToTerraform(struct!.locationreal),
    log: cdktf.stringToTerraform(struct!.log),
    log_packet: cdktf.stringToTerraform(struct!.logPacket),
    name: cdktf.stringToTerraform(struct!.name),
    os: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.os),
    osreal: cdktf.stringToTerraform(struct!.osreal),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    protocolreal: cdktf.stringToTerraform(struct!.protocolreal),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.numberToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
    severityreal: cdktf.stringToTerraform(struct!.severityreal),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectGlobalIpsSensorFilterToHclTerraform(struct?: ObjectGlobalIpsSensorFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    applicationreal: {
      value: cdktf.stringToHclTerraform(struct!.applicationreal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.location),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    locationreal: {
      value: cdktf.stringToHclTerraform(struct!.locationreal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_packet: {
      value: cdktf.stringToHclTerraform(struct!.logPacket),
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
    os: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.os),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    osreal: {
      value: cdktf.stringToHclTerraform(struct!.osreal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocolreal: {
      value: cdktf.stringToHclTerraform(struct!.protocolreal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.numberToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    severityreal: {
      value: cdktf.stringToHclTerraform(struct!.severityreal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGlobalIpsSensorFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGlobalIpsSensorFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._applicationreal !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationreal = this._applicationreal;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._locationreal !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationreal = this._locationreal;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPacket = this._logPacket;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._osreal !== undefined) {
      hasAnyValues = true;
      internalValueResult.osreal = this._osreal;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolreal !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolreal = this._protocolreal;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._severityreal !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityreal = this._severityreal;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGlobalIpsSensorFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._application = undefined;
      this._applicationreal = undefined;
      this._location = undefined;
      this._locationreal = undefined;
      this._log = undefined;
      this._logPacket = undefined;
      this._name = undefined;
      this._os = undefined;
      this._osreal = undefined;
      this._protocol = undefined;
      this._protocolreal = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._severity = undefined;
      this._severityreal = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._application = value.application;
      this._applicationreal = value.applicationreal;
      this._location = value.location;
      this._locationreal = value.locationreal;
      this._log = value.log;
      this._logPacket = value.logPacket;
      this._name = value.name;
      this._os = value.os;
      this._osreal = value.osreal;
      this._protocol = value.protocol;
      this._protocolreal = value.protocolreal;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._severity = value.severity;
      this._severityreal = value.severityreal;
      this._status = value.status;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application - computed: true, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return cdktf.Fn.tolist(this.getListAttribute('application'));
  }
  public set application(value: string[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // applicationreal - computed: false, optional: true, required: false
  private _applicationreal?: string; 
  public get applicationreal() {
    return this.getStringAttribute('applicationreal');
  }
  public set applicationreal(value: string) {
    this._applicationreal = value;
  }
  public resetApplicationreal() {
    this._applicationreal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationrealInput() {
    return this._applicationreal;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // locationreal - computed: false, optional: true, required: false
  private _locationreal?: string; 
  public get locationreal() {
    return this.getStringAttribute('locationreal');
  }
  public set locationreal(value: string) {
    this._locationreal = value;
  }
  public resetLocationreal() {
    this._locationreal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationrealInput() {
    return this._locationreal;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_packet - computed: false, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string[]; 
  public get os() {
    return cdktf.Fn.tolist(this.getListAttribute('os'));
  }
  public set os(value: string[]) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // osreal - computed: false, optional: true, required: false
  private _osreal?: string; 
  public get osreal() {
    return this.getStringAttribute('osreal');
  }
  public set osreal(value: string) {
    this._osreal = value;
  }
  public resetOsreal() {
    this._osreal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osrealInput() {
    return this._osreal;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocolreal - computed: false, optional: true, required: false
  private _protocolreal?: string; 
  public get protocolreal() {
    return this.getStringAttribute('protocolreal');
  }
  public set protocolreal(value: string) {
    this._protocolreal = value;
  }
  public resetProtocolreal() {
    this._protocolreal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolrealInput() {
    return this._protocolreal;
  }

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: false, optional: true, required: false
  private _quarantineExpiry?: number; 
  public get quarantineExpiry() {
    return this.getNumberAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: number) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: false, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return cdktf.Fn.tolist(this.getListAttribute('severity'));
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // severityreal - computed: false, optional: true, required: false
  private _severityreal?: string; 
  public get severityreal() {
    return this.getStringAttribute('severityreal');
  }
  public set severityreal(value: string) {
    this._severityreal = value;
  }
  public resetSeverityreal() {
    this._severityreal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityrealInput() {
    return this._severityreal;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ObjectGlobalIpsSensorFilterList extends cdktf.ComplexList {
  public internalValue? : ObjectGlobalIpsSensorFilter[] | cdktf.IResolvable

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
  public get(index: number): ObjectGlobalIpsSensorFilterOutputReference {
    return new ObjectGlobalIpsSensorFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectGlobalIpsSensorOverrideExemptIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#dst_ip ObjectGlobalIpsSensor#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#id ObjectGlobalIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#src_ip ObjectGlobalIpsSensor#src_ip}
  */
  readonly srcIp?: string;
}

export function objectGlobalIpsSensorOverrideExemptIpToTerraform(struct?: ObjectGlobalIpsSensorOverrideExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    id: cdktf.numberToTerraform(struct!.id),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
  }
}


export function objectGlobalIpsSensorOverrideExemptIpToHclTerraform(struct?: ObjectGlobalIpsSensorOverrideExemptIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGlobalIpsSensorOverrideExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGlobalIpsSensorOverrideExemptIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGlobalIpsSensorOverrideExemptIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIp = undefined;
      this._id = undefined;
      this._srcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIp = value.dstIp;
      this._id = value.id;
      this._srcIp = value.srcIp;
    }
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }
}

export class ObjectGlobalIpsSensorOverrideExemptIpList extends cdktf.ComplexList {
  public internalValue? : ObjectGlobalIpsSensorOverrideExemptIp[] | cdktf.IResolvable

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
  public get(index: number): ObjectGlobalIpsSensorOverrideExemptIpOutputReference {
    return new ObjectGlobalIpsSensorOverrideExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectGlobalIpsSensorOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#action ObjectGlobalIpsSensor#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log ObjectGlobalIpsSensor#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#log_packet ObjectGlobalIpsSensor#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine ObjectGlobalIpsSensor#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine_expiry ObjectGlobalIpsSensor#quarantine_expiry}
  */
  readonly quarantineExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#quarantine_log ObjectGlobalIpsSensor#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#rule_id ObjectGlobalIpsSensor#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#status ObjectGlobalIpsSensor#status}
  */
  readonly status?: string;
  /**
  * exempt_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#exempt_ip ObjectGlobalIpsSensor#exempt_ip}
  */
  readonly exemptIp?: ObjectGlobalIpsSensorOverrideExemptIp[] | cdktf.IResolvable;
}

export function objectGlobalIpsSensorOverrideToTerraform(struct?: ObjectGlobalIpsSensorOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    log_packet: cdktf.stringToTerraform(struct!.logPacket),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.numberToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
    status: cdktf.stringToTerraform(struct!.status),
    exempt_ip: cdktf.listMapper(objectGlobalIpsSensorOverrideExemptIpToTerraform, true)(struct!.exemptIp),
  }
}


export function objectGlobalIpsSensorOverrideToHclTerraform(struct?: ObjectGlobalIpsSensorOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_packet: {
      value: cdktf.stringToHclTerraform(struct!.logPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.numberToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(objectGlobalIpsSensorOverrideExemptIpToHclTerraform, true)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectGlobalIpsSensorOverrideExemptIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGlobalIpsSensorOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGlobalIpsSensorOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPacket = this._logPacket;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._exemptIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptIp = this._exemptIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGlobalIpsSensorOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._log = undefined;
      this._logPacket = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._ruleId = undefined;
      this._status = undefined;
      this._exemptIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._log = value.log;
      this._logPacket = value.logPacket;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._ruleId = value.ruleId;
      this._status = value.status;
      this._exemptIp.internalValue = value.exemptIp;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_packet - computed: false, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: false, optional: true, required: false
  private _quarantineExpiry?: number; 
  public get quarantineExpiry() {
    return this.getNumberAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: number) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: false, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // exempt_ip - computed: false, optional: true, required: false
  private _exemptIp = new ObjectGlobalIpsSensorOverrideExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: ObjectGlobalIpsSensorOverrideExemptIp[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
  }
}

export class ObjectGlobalIpsSensorOverrideList extends cdktf.ComplexList {
  public internalValue? : ObjectGlobalIpsSensorOverride[] | cdktf.IResolvable

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
  public get(index: number): ObjectGlobalIpsSensorOverrideOutputReference {
    return new ObjectGlobalIpsSensorOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor fortimanager_object_global_ips_sensor}
*/
export class ObjectGlobalIpsSensor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_global_ips_sensor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectGlobalIpsSensor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectGlobalIpsSensor to import
  * @param importFromId The id of the existing ObjectGlobalIpsSensor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectGlobalIpsSensor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_global_ips_sensor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_global_ips_sensor fortimanager_object_global_ips_sensor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectGlobalIpsSensorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectGlobalIpsSensorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_global_ips_sensor',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._blockMaliciousUrl = config.blockMaliciousUrl;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedLog = config.extendedLog;
    this._id = config.id;
    this._log = config.log;
    this._name = config.name;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._scopetype = config.scopetype;
    this._entries.internalValue = config.entries;
    this._filter.internalValue = config.filter;
    this._override.internalValue = config.override;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // block_malicious_url - computed: true, optional: true, required: false
  private _blockMaliciousUrl?: string; 
  public get blockMaliciousUrl() {
    return this.getStringAttribute('block_malicious_url');
  }
  public set blockMaliciousUrl(value: string) {
    this._blockMaliciousUrl = value;
  }
  public resetBlockMaliciousUrl() {
    this._blockMaliciousUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMaliciousUrlInput() {
    return this._blockMaliciousUrl;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
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

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // scan_botnet_connections - computed: true, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new ObjectGlobalIpsSensorEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ObjectGlobalIpsSensorEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ObjectGlobalIpsSensorFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ObjectGlobalIpsSensorFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new ObjectGlobalIpsSensorOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: ObjectGlobalIpsSensorOverride[] | cdktf.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      block_malicious_url: cdktf.stringToTerraform(this._blockMaliciousUrl),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.stringToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      entries: cdktf.listMapper(objectGlobalIpsSensorEntriesToTerraform, true)(this._entries.internalValue),
      filter: cdktf.listMapper(objectGlobalIpsSensorFilterToTerraform, true)(this._filter.internalValue),
      override: cdktf.listMapper(objectGlobalIpsSensorOverrideToTerraform, true)(this._override.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_malicious_url: {
        value: cdktf.stringToHclTerraform(this._blockMaliciousUrl),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
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
      log: {
        value: cdktf.stringToHclTerraform(this._log),
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
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(objectGlobalIpsSensorEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectGlobalIpsSensorEntriesList",
      },
      filter: {
        value: cdktf.listMapperHcl(objectGlobalIpsSensorFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectGlobalIpsSensorFilterList",
      },
      override: {
        value: cdktf.listMapperHcl(objectGlobalIpsSensorOverrideToHclTerraform, true)(this._override.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectGlobalIpsSensorOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
