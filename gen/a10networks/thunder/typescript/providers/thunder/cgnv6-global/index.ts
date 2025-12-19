// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6GlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#id Cgnv6Global#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable ping sweep detection; 'disable': Disable ping sweep detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#ping_sweep_detection Cgnv6Global#ping_sweep_detection}
  */
  readonly pingSweepDetection?: string;
  /**
  * 'enable': Enable port scan detection; 'disable': Disable port scan detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#port_scan_detection Cgnv6Global#port_scan_detection}
  */
  readonly portScanDetection?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#uuid Cgnv6Global#uuid}
  */
  readonly uuid?: string;
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#domain_list Cgnv6Global#domain_list}
  */
  readonly domainList?: Cgnv6GlobalDomainListStruct;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#sampling_enable Cgnv6Global#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6GlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6GlobalDomainListStruct {
  /**
  * 'enable': Enable the DNS AAAA query for each domain in the domain list.; 'disable': Disable the DNS AAAA query for each domain in the domain list.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#aaaa_query Cgnv6Global#aaaa_query}
  */
  readonly aaaaQuery?: string;
  /**
  * Set up the global failure interval in second for the DNS resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#fail_interval Cgnv6Global#fail_interval}
  */
  readonly failInterval?: number;
  /**
  * Set up the global query interval in minute for the DNS resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#interval Cgnv6Global#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#uuid Cgnv6Global#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6GlobalDomainListStructToTerraform(struct?: Cgnv6GlobalDomainListStructOutputReference | Cgnv6GlobalDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaaa_query: cdktf.stringToTerraform(struct!.aaaaQuery),
    fail_interval: cdktf.numberToTerraform(struct!.failInterval),
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6GlobalDomainListStructToHclTerraform(struct?: Cgnv6GlobalDomainListStructOutputReference | Cgnv6GlobalDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aaaa_query: {
      value: cdktf.stringToHclTerraform(struct!.aaaaQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_interval: {
      value: cdktf.numberToHclTerraform(struct!.failInterval),
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

export class Cgnv6GlobalDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6GlobalDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaaaQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaQuery = this._aaaaQuery;
    }
    if (this._failInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.failInterval = this._failInterval;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6GlobalDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaaaQuery = undefined;
      this._failInterval = undefined;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaaaQuery = value.aaaaQuery;
      this._failInterval = value.failInterval;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // aaaa_query - computed: false, optional: true, required: false
  private _aaaaQuery?: string; 
  public get aaaaQuery() {
    return this.getStringAttribute('aaaa_query');
  }
  public set aaaaQuery(value: string) {
    this._aaaaQuery = value;
  }
  public resetAaaaQuery() {
    this._aaaaQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaQueryInput() {
    return this._aaaaQuery;
  }

  // fail_interval - computed: false, optional: true, required: false
  private _failInterval?: number; 
  public get failInterval() {
    return this.getNumberAttribute('fail_interval');
  }
  public set failInterval(value: number) {
    this._failInterval = value;
  }
  public resetFailInterval() {
    this._failInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIntervalInput() {
    return this._failInterval;
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
export interface Cgnv6GlobalSamplingEnable {
  /**
  * 'all': all; 'tcp-total-ports-allocated': Total TCP ports allocated; 'udp-total-ports-allocated': Total UDP ports allocated; 'icmp-total-ports-allocated': Total ICMP ports allocated;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#counters1 Cgnv6Global#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6GlobalSamplingEnableToTerraform(struct?: Cgnv6GlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6GlobalSamplingEnableToHclTerraform(struct?: Cgnv6GlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6GlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6GlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6GlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6GlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6GlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6GlobalSamplingEnableOutputReference {
    return new Cgnv6GlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global thunder_cgnv6_global}
*/
export class Cgnv6Global extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Global resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Global to import
  * @param importFromId The id of the existing Cgnv6Global that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Global to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global thunder_cgnv6_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6GlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6GlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_global',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._pingSweepDetection = config.pingSweepDetection;
    this._portScanDetection = config.portScanDetection;
    this._uuid = config.uuid;
    this._domainList.internalValue = config.domainList;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // ping_sweep_detection - computed: false, optional: true, required: false
  private _pingSweepDetection?: string; 
  public get pingSweepDetection() {
    return this.getStringAttribute('ping_sweep_detection');
  }
  public set pingSweepDetection(value: string) {
    this._pingSweepDetection = value;
  }
  public resetPingSweepDetection() {
    this._pingSweepDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSweepDetectionInput() {
    return this._pingSweepDetection;
  }

  // port_scan_detection - computed: false, optional: true, required: false
  private _portScanDetection?: string; 
  public get portScanDetection() {
    return this.getStringAttribute('port_scan_detection');
  }
  public set portScanDetection(value: string) {
    this._portScanDetection = value;
  }
  public resetPortScanDetection() {
    this._portScanDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanDetectionInput() {
    return this._portScanDetection;
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

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new Cgnv6GlobalDomainListStructOutputReference(this, "domain_list");
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: Cgnv6GlobalDomainListStruct) {
    this._domainList.internalValue = value;
  }
  public resetDomainList() {
    this._domainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6GlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6GlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ping_sweep_detection: cdktf.stringToTerraform(this._pingSweepDetection),
      port_scan_detection: cdktf.stringToTerraform(this._portScanDetection),
      uuid: cdktf.stringToTerraform(this._uuid),
      domain_list: cgnv6GlobalDomainListStructToTerraform(this._domainList.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6GlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      ping_sweep_detection: {
        value: cdktf.stringToHclTerraform(this._pingSweepDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_scan_detection: {
        value: cdktf.stringToHclTerraform(this._portScanDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list: {
        value: cgnv6GlobalDomainListStructToHclTerraform(this._domainList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6GlobalDomainListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6GlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6GlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
