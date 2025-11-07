// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectIpsSensorEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#action ObjectIpsSensorEntriesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#adom ObjectIpsSensorEntriesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#application ObjectIpsSensorEntriesA#application}
  */
  readonly application?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#cve ObjectIpsSensorEntriesA#cve}
  */
  readonly cve?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#default_action ObjectIpsSensorEntriesA#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#default_status ObjectIpsSensorEntriesA#default_status}
  */
  readonly defaultStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#dynamic_sort_subtable ObjectIpsSensorEntriesA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#fosid ObjectIpsSensorEntriesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#id ObjectIpsSensorEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#last_modified ObjectIpsSensorEntriesA#last_modified}
  */
  readonly lastModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#location ObjectIpsSensorEntriesA#location}
  */
  readonly location?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#log ObjectIpsSensorEntriesA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#log_attack_context ObjectIpsSensorEntriesA#log_attack_context}
  */
  readonly logAttackContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#log_packet ObjectIpsSensorEntriesA#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#os ObjectIpsSensorEntriesA#os}
  */
  readonly os?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#protocol ObjectIpsSensorEntriesA#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#quarantine ObjectIpsSensorEntriesA#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#quarantine_expiry ObjectIpsSensorEntriesA#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#quarantine_log ObjectIpsSensorEntriesA#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#rate_count ObjectIpsSensorEntriesA#rate_count}
  */
  readonly rateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#rate_duration ObjectIpsSensorEntriesA#rate_duration}
  */
  readonly rateDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#rate_mode ObjectIpsSensorEntriesA#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#rate_track ObjectIpsSensorEntriesA#rate_track}
  */
  readonly rateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#rule ObjectIpsSensorEntriesA#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#scopetype ObjectIpsSensorEntriesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#sensor ObjectIpsSensorEntriesA#sensor}
  */
  readonly sensor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#severity ObjectIpsSensorEntriesA#severity}
  */
  readonly severity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#status ObjectIpsSensorEntriesA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#vuln_type ObjectIpsSensorEntriesA#vuln_type}
  */
  readonly vulnType?: number[];
  /**
  * exempt_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#exempt_ip ObjectIpsSensorEntriesA#exempt_ip}
  */
  readonly exemptIp?: ObjectIpsSensorEntriesExemptIpA[] | cdktf.IResolvable;
}
export interface ObjectIpsSensorEntriesExemptIpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#dst_ip ObjectIpsSensorEntriesA#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#id ObjectIpsSensorEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#src_ip ObjectIpsSensorEntriesA#src_ip}
  */
  readonly srcIp?: string;
}

export function objectIpsSensorEntriesExemptIpAToTerraform(struct?: ObjectIpsSensorEntriesExemptIpA | cdktf.IResolvable): any {
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


export function objectIpsSensorEntriesExemptIpAToHclTerraform(struct?: ObjectIpsSensorEntriesExemptIpA | cdktf.IResolvable): any {
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

export class ObjectIpsSensorEntriesExemptIpAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectIpsSensorEntriesExemptIpA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectIpsSensorEntriesExemptIpA | cdktf.IResolvable | undefined) {
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

export class ObjectIpsSensorEntriesExemptIpAList extends cdktf.ComplexList {
  public internalValue? : ObjectIpsSensorEntriesExemptIpA[] | cdktf.IResolvable

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
  public get(index: number): ObjectIpsSensorEntriesExemptIpAOutputReference {
    return new ObjectIpsSensorEntriesExemptIpAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries fortimanager_object_ips_sensor_entries}
*/
export class ObjectIpsSensorEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_ips_sensor_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectIpsSensorEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectIpsSensorEntriesA to import
  * @param importFromId The id of the existing ObjectIpsSensorEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectIpsSensorEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_ips_sensor_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_ips_sensor_entries fortimanager_object_ips_sensor_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectIpsSensorEntriesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectIpsSensorEntriesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_ips_sensor_entries',
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
    this._action = config.action;
    this._adom = config.adom;
    this._application = config.application;
    this._cve = config.cve;
    this._defaultAction = config.defaultAction;
    this._defaultStatus = config.defaultStatus;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._id = config.id;
    this._lastModified = config.lastModified;
    this._location = config.location;
    this._log = config.log;
    this._logAttackContext = config.logAttackContext;
    this._logPacket = config.logPacket;
    this._os = config.os;
    this._protocol = config.protocol;
    this._quarantine = config.quarantine;
    this._quarantineExpiry = config.quarantineExpiry;
    this._quarantineLog = config.quarantineLog;
    this._rateCount = config.rateCount;
    this._rateDuration = config.rateDuration;
    this._rateMode = config.rateMode;
    this._rateTrack = config.rateTrack;
    this._rule = config.rule;
    this._scopetype = config.scopetype;
    this._sensor = config.sensor;
    this._severity = config.severity;
    this._status = config.status;
    this._vulnType = config.vulnType;
    this._exemptIp.internalValue = config.exemptIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // sensor - computed: false, optional: false, required: true
  private _sensor?: string; 
  public get sensor() {
    return this.getStringAttribute('sensor');
  }
  public set sensor(value: string) {
    this._sensor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorInput() {
    return this._sensor;
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
  private _exemptIp = new ObjectIpsSensorEntriesExemptIpAList(this, "exempt_ip", false);
  public get exemptIp() {
    return this._exemptIp;
  }
  public putExemptIp(value: ObjectIpsSensorEntriesExemptIpA[] | cdktf.IResolvable) {
    this._exemptIp.internalValue = value;
  }
  public resetExemptIp() {
    this._exemptIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptIpInput() {
    return this._exemptIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._application),
      cve: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cve),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      default_status: cdktf.stringToTerraform(this._defaultStatus),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      last_modified: cdktf.stringToTerraform(this._lastModified),
      location: cdktf.listMapper(cdktf.stringToTerraform, false)(this._location),
      log: cdktf.stringToTerraform(this._log),
      log_attack_context: cdktf.stringToTerraform(this._logAttackContext),
      log_packet: cdktf.stringToTerraform(this._logPacket),
      os: cdktf.listMapper(cdktf.stringToTerraform, false)(this._os),
      protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocol),
      quarantine: cdktf.stringToTerraform(this._quarantine),
      quarantine_expiry: cdktf.stringToTerraform(this._quarantineExpiry),
      quarantine_log: cdktf.stringToTerraform(this._quarantineLog),
      rate_count: cdktf.numberToTerraform(this._rateCount),
      rate_duration: cdktf.numberToTerraform(this._rateDuration),
      rate_mode: cdktf.stringToTerraform(this._rateMode),
      rate_track: cdktf.stringToTerraform(this._rateTrack),
      rule: cdktf.stringToTerraform(this._rule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sensor: cdktf.stringToTerraform(this._sensor),
      severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severity),
      status: cdktf.stringToTerraform(this._status),
      vuln_type: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vulnType),
      exempt_ip: cdktf.listMapper(objectIpsSensorEntriesExemptIpAToTerraform, true)(this._exemptIp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._application),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cve: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cve),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_status: {
        value: cdktf.stringToHclTerraform(this._defaultStatus),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modified: {
        value: cdktf.stringToHclTerraform(this._lastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._location),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_attack_context: {
        value: cdktf.stringToHclTerraform(this._logAttackContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_packet: {
        value: cdktf.stringToHclTerraform(this._logPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._os),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      quarantine: {
        value: cdktf.stringToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_expiry: {
        value: cdktf.stringToHclTerraform(this._quarantineExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_log: {
        value: cdktf.stringToHclTerraform(this._quarantineLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_count: {
        value: cdktf.numberToHclTerraform(this._rateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_duration: {
        value: cdktf.numberToHclTerraform(this._rateDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_mode: {
        value: cdktf.stringToHclTerraform(this._rateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_track: {
        value: cdktf.stringToHclTerraform(this._rateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
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
      sensor: {
        value: cdktf.stringToHclTerraform(this._sensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vuln_type: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vulnType),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      exempt_ip: {
        value: cdktf.listMapperHcl(objectIpsSensorEntriesExemptIpAToHclTerraform, true)(this._exemptIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectIpsSensorEntriesExemptIpAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
