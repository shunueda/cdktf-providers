// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesTraceAggregatedSnapshotDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}
  */
  readonly spanKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}
  */
  readonly spanName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}
  */
  readonly traceKey: string;
}
export interface DataOciApmTracesTraceAggregatedSnapshotDataDetails {
}

export function dataOciApmTracesTraceAggregatedSnapshotDataDetailsToTerraform(struct?: DataOciApmTracesTraceAggregatedSnapshotDataDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesTraceAggregatedSnapshotDataDetailsToHclTerraform(struct?: DataOciApmTracesTraceAggregatedSnapshotDataDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesTraceAggregatedSnapshotDataDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceAggregatedSnapshotDataDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciApmTracesTraceAggregatedSnapshotDataDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference {
    return new DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data oci_apm_traces_trace_aggregated_snapshot_data}
*/
export class DataOciApmTracesTraceAggregatedSnapshotData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_trace_aggregated_snapshot_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmTracesTraceAggregatedSnapshotData to import
  * @param importFromId The id of the existing DataOciApmTracesTraceAggregatedSnapshotData that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmTracesTraceAggregatedSnapshotData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_trace_aggregated_snapshot_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_traces_trace_aggregated_snapshot_data oci_apm_traces_trace_aggregated_snapshot_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesTraceAggregatedSnapshotDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesTraceAggregatedSnapshotDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_trace_aggregated_snapshot_data',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._serverName = config.serverName;
    this._serviceName = config.serviceName;
    this._spanKey = config.spanKey;
    this._spanName = config.spanName;
    this._traceKey = config.traceKey;
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

  // details - computed: true, optional: false, required: false
  private _details = new DataOciApmTracesTraceAggregatedSnapshotDataDetailsList(this, "details", false);
  public get details() {
    return this._details;
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

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // span_key - computed: false, optional: true, required: false
  private _spanKey?: string; 
  public get spanKey() {
    return this.getStringAttribute('span_key');
  }
  public set spanKey(value: string) {
    this._spanKey = value;
  }
  public resetSpanKey() {
    this._spanKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanKeyInput() {
    return this._spanKey;
  }

  // span_name - computed: false, optional: true, required: false
  private _spanName?: string; 
  public get spanName() {
    return this.getStringAttribute('span_name');
  }
  public set spanName(value: string) {
    this._spanName = value;
  }
  public resetSpanName() {
    this._spanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNameInput() {
    return this._spanName;
  }

  // trace_key - computed: false, optional: false, required: true
  private _traceKey?: string; 
  public get traceKey() {
    return this.getStringAttribute('trace_key');
  }
  public set traceKey(value: string) {
    this._traceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceKeyInput() {
    return this._traceKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      id: cdktf.stringToTerraform(this._id),
      server_name: cdktf.stringToTerraform(this._serverName),
      service_name: cdktf.stringToTerraform(this._serviceName),
      span_key: cdktf.stringToTerraform(this._spanKey),
      span_name: cdktf.stringToTerraform(this._spanName),
      trace_key: cdktf.stringToTerraform(this._traceKey),
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
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span_key: {
        value: cdktf.stringToHclTerraform(this._spanKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span_name: {
        value: cdktf.stringToHclTerraform(this._spanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_key: {
        value: cdktf.stringToHclTerraform(this._traceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
