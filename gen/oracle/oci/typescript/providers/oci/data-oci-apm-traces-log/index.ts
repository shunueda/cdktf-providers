// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log#apm_domain_id DataOciApmTracesLog#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log#id DataOciApmTracesLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log#log_key DataOciApmTracesLog#log_key}
  */
  readonly logKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log#time_log_ended_less_than DataOciApmTracesLog#time_log_ended_less_than}
  */
  readonly timeLogEndedLessThan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log#time_log_started_greater_than_or_equal_to DataOciApmTracesLog#time_log_started_greater_than_or_equal_to}
  */
  readonly timeLogStartedGreaterThanOrEqualTo: string;
}
export interface DataOciApmTracesLogAttributes {
}

export function dataOciApmTracesLogAttributesToTerraform(struct?: DataOciApmTracesLogAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesLogAttributesToHclTerraform(struct?: DataOciApmTracesLogAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesLogAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesLogAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesLogAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
}

export class DataOciApmTracesLogAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesLogAttributesOutputReference {
    return new DataOciApmTracesLogAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log oci_apm_traces_log}
*/
export class DataOciApmTracesLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmTracesLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmTracesLog to import
  * @param importFromId The id of the existing DataOciApmTracesLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmTracesLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_log oci_apm_traces_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesLogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_log',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._id = config.id;
    this._logKey = config.logKey;
    this._timeLogEndedLessThan = config.timeLogEndedLessThan;
    this._timeLogStartedGreaterThanOrEqualTo = config.timeLogStartedGreaterThanOrEqualTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // attribute_metadata - computed: true, optional: false, required: false
  private _attributeMetadata = new cdktf.StringMap(this, "attribute_metadata");
  public get attributeMetadata() {
    return this._attributeMetadata;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataOciApmTracesLogAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
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

  // log_key - computed: false, optional: false, required: true
  private _logKey?: string; 
  public get logKey() {
    return this.getStringAttribute('log_key');
  }
  public set logKey(value: string) {
    this._logKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logKeyInput() {
    return this._logKey;
  }

  // overflow_attributes - computed: true, optional: false, required: false
  public get overflowAttributes() {
    return this.getStringAttribute('overflow_attributes');
  }

  // severity_number - computed: true, optional: false, required: false
  public get severityNumber() {
    return this.getNumberAttribute('severity_number');
  }

  // severity_text - computed: true, optional: false, required: false
  public get severityText() {
    return this.getStringAttribute('severity_text');
  }

  // span_key - computed: true, optional: false, required: false
  public get spanKey() {
    return this.getStringAttribute('span_key');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_log_ended_less_than - computed: false, optional: false, required: true
  private _timeLogEndedLessThan?: string; 
  public get timeLogEndedLessThan() {
    return this.getStringAttribute('time_log_ended_less_than');
  }
  public set timeLogEndedLessThan(value: string) {
    this._timeLogEndedLessThan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLogEndedLessThanInput() {
    return this._timeLogEndedLessThan;
  }

  // time_log_started_greater_than_or_equal_to - computed: false, optional: false, required: true
  private _timeLogStartedGreaterThanOrEqualTo?: string; 
  public get timeLogStartedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_log_started_greater_than_or_equal_to');
  }
  public set timeLogStartedGreaterThanOrEqualTo(value: string) {
    this._timeLogStartedGreaterThanOrEqualTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLogStartedGreaterThanOrEqualToInput() {
    return this._timeLogStartedGreaterThanOrEqualTo;
  }

  // time_observed - computed: true, optional: false, required: false
  public get timeObserved() {
    return this.getStringAttribute('time_observed');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // trace_flags - computed: true, optional: false, required: false
  public get traceFlags() {
    return this.getNumberAttribute('trace_flags');
  }

  // trace_key - computed: true, optional: false, required: false
  public get traceKey() {
    return this.getStringAttribute('trace_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      id: cdktf.stringToTerraform(this._id),
      log_key: cdktf.stringToTerraform(this._logKey),
      time_log_ended_less_than: cdktf.stringToTerraform(this._timeLogEndedLessThan),
      time_log_started_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeLogStartedGreaterThanOrEqualTo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
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
      log_key: {
        value: cdktf.stringToHclTerraform(this._logKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_log_ended_less_than: {
        value: cdktf.stringToHclTerraform(this._timeLogEndedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_log_started_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLogStartedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
