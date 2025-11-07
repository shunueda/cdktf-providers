// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectIpsSensorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#_baseline ObjectIpsSensor#_baseline}
  */
  readonly baseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#adom ObjectIpsSensor#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#block_malicious_url ObjectIpsSensor#block_malicious_url}
  */
  readonly blockMaliciousUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#comment ObjectIpsSensor#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#dynamic_sort_subtable ObjectIpsSensor#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#extended_log ObjectIpsSensor#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#id ObjectIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#name ObjectIpsSensor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#replacemsg_group ObjectIpsSensor#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#scan_botnet_connections ObjectIpsSensor#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#scopetype ObjectIpsSensor#scopetype}
  */
  readonly scopetype?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#entries ObjectIpsSensor#entries}
  */
  readonly entries?: ObjectIpsSensorEntries[] | cdktf.IResolvable;
}
export interface ObjectIpsSensorEntriesExemptIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#dst_ip ObjectIpsSensor#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#id ObjectIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#src_ip ObjectIpsSensor#src_ip}
  */
  readonly srcIp?: string;
}

export function objectIpsSensorEntriesExemptIpToTerraform(struct?: ObjectIpsSensorEntriesExemptIp | cdktf.IResolvable): any {
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


export function objectIpsSensorEntriesExemptIpToHclTerraform(struct?: ObjectIpsSensorEntriesExemptIp | cdktf.IResolvable): any {
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

export class ObjectIpsSensorEntriesExemptIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectIpsSensorEntriesExemptIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectIpsSensorEntriesExemptIp | cdktf.IResolvable | undefined) {
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

export class ObjectIpsSensorEntriesExemptIpList extends cdktf.ComplexList {
  public internalValue? : ObjectIpsSensorEntriesExemptIp[] | cdktf.IResolvable

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
  public get(index: number): ObjectIpsSensorEntriesExemptIpOutputReference {
    return new ObjectIpsSensorEntriesExemptIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectIpsSensorEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#action ObjectIpsSensor#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#application ObjectIpsSensor#application}
  */
  readonly application?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#cve ObjectIpsSensor#cve}
  */
  readonly cve?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#default_action ObjectIpsSensor#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#default_status ObjectIpsSensor#default_status}
  */
  readonly defaultStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#id ObjectIpsSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#last_modified ObjectIpsSensor#last_modified}
  */
  readonly lastModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#location ObjectIpsSensor#location}
  */
  readonly location?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#log ObjectIpsSensor#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#log_attack_context ObjectIpsSensor#log_attack_context}
  */
  readonly logAttackContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#log_packet ObjectIpsSensor#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#os ObjectIpsSensor#os}
  */
  readonly os?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#protocol ObjectIpsSensor#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#quarantine ObjectIpsSensor#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#quarantine_expiry ObjectIpsSensor#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#quarantine_log ObjectIpsSensor#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#rate_count ObjectIpsSensor#rate_count}
  */
  readonly rateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#rate_duration ObjectIpsSensor#rate_duration}
  */
  readonly rateDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#rate_mode ObjectIpsSensor#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#rate_track ObjectIpsSensor#rate_track}
  */
  readonly rateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#rule ObjectIpsSensor#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#severity ObjectIpsSensor#severity}
  */
  readonly severity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#status ObjectIpsSensor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#vuln_type ObjectIpsSensor#vuln_type}
  */
  readonly vulnType?: number[];
  /**
  * exempt_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#exempt_ip ObjectIpsSensor#exempt_ip}
  */
  readonly exemptIp?: ObjectIpsSensorEntriesExemptIp[] | cdktf.IResolvable;
}

export function objectIpsSensorEntriesToTerraform(struct?: ObjectIpsSensorEntries | cdktf.IResolvable): any {
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
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.stringToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    rate_count: cdktf.numberToTerraform(struct!.rateCount),
    rate_duration: cdktf.numberToTerraform(struct!.rateDuration),
    rate_mode: cdktf.stringToTerraform(struct!.rateMode),
    rate_track: cdktf.stringToTerraform(struct!.rateTrack),
    rule: cdktf.stringToTerraform(struct!.rule),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    vuln_type: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vulnType),
    exempt_ip: cdktf.listMapper(objectIpsSensorEntriesExemptIpToTerraform, true)(struct!.exemptIp),
  }
}


export function objectIpsSensorEntriesToHclTerraform(struct?: ObjectIpsSensorEntries | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.rule),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vuln_type: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vulnType),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    exempt_ip: {
      value: cdktf.listMapperHcl(objectIpsSensorEntriesExemptIpToHclTerraform, true)(struct!.exemptIp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectIpsSensorEntriesExemptIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectIpsSensorEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectIpsSensorEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectIpsSensorEntries | cdktf.IResolvable | undefined) {
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

  // last_modified - computed: true, optional: true, required: false
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

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
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
  private _exemptIp = new ObjectIpsSensorEntriesExemptIpList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: ObjectIpsSensorEntriesExemptIp[] | cdktf.IResolvable) {
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

export class ObjectIpsSensorEntriesList extends cdktf.ComplexList {
  public internalValue? : ObjectIpsSensorEntries[] | cdktf.IResolvable

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
  public get(index: number): ObjectIpsSensorEntriesOutputReference {
    return new ObjectIpsSensorEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor fortimanager_object_ips_sensor}
*/
export class ObjectIpsSensor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_ips_sensor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectIpsSensor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectIpsSensor to import
  * @param importFromId The id of the existing ObjectIpsSensor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectIpsSensor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_ips_sensor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor fortimanager_object_ips_sensor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectIpsSensorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectIpsSensorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_ips_sensor',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseline = config.baseline;
    this._adom = config.adom;
    this._blockMaliciousUrl = config.blockMaliciousUrl;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedLog = config.extendedLog;
    this._id = config.id;
    this._name = config.name;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._scopetype = config.scopetype;
    this._entries.internalValue = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _baseline - computed: false, optional: true, required: false
  private _baseline?: string; 
  public get baseline() {
    return this.getStringAttribute('_baseline');
  }
  public set baseline(value: string) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

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
  private _entries = new ObjectIpsSensorEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ObjectIpsSensorEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _baseline: cdktf.stringToTerraform(this._baseline),
      adom: cdktf.stringToTerraform(this._adom),
      block_malicious_url: cdktf.stringToTerraform(this._blockMaliciousUrl),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      entries: cdktf.listMapper(objectIpsSensorEntriesToTerraform, true)(this._entries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _baseline: {
        value: cdktf.stringToHclTerraform(this._baseline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
        value: cdktf.listMapperHcl(objectIpsSensorEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectIpsSensorEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
