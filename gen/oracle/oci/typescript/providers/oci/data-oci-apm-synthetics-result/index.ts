// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmSyntheticsResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#apm_domain_id DataOciApmSyntheticsResult#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#execution_time DataOciApmSyntheticsResult#execution_time}
  */
  readonly executionTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#id DataOciApmSyntheticsResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#monitor_id DataOciApmSyntheticsResult#monitor_id}
  */
  readonly monitorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#result_content_type DataOciApmSyntheticsResult#result_content_type}
  */
  readonly resultContentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#result_type DataOciApmSyntheticsResult#result_type}
  */
  readonly resultType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#vantage_point DataOciApmSyntheticsResult#vantage_point}
  */
  readonly vantagePoint: string;
}
export interface DataOciApmSyntheticsResultResultDataSet {
}

export function dataOciApmSyntheticsResultResultDataSetToTerraform(struct?: DataOciApmSyntheticsResultResultDataSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsResultResultDataSetToHclTerraform(struct?: DataOciApmSyntheticsResultResultDataSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsResultResultDataSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsResultResultDataSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsResultResultDataSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // byte_content - computed: true, optional: false, required: false
  public get byteContent() {
    return this.getStringAttribute('byte_content');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // string_content - computed: true, optional: false, required: false
  public get stringContent() {
    return this.getStringAttribute('string_content');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataOciApmSyntheticsResultResultDataSetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsResultResultDataSetOutputReference {
    return new DataOciApmSyntheticsResultResultDataSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result oci_apm_synthetics_result}
*/
export class DataOciApmSyntheticsResult extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmSyntheticsResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmSyntheticsResult to import
  * @param importFromId The id of the existing DataOciApmSyntheticsResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmSyntheticsResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_synthetics_result oci_apm_synthetics_result} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmSyntheticsResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmSyntheticsResultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_result',
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
    this._executionTime = config.executionTime;
    this._id = config.id;
    this._monitorId = config.monitorId;
    this._resultContentType = config.resultContentType;
    this._resultType = config.resultType;
    this._vantagePoint = config.vantagePoint;
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

  // execution_time - computed: false, optional: false, required: true
  private _executionTime?: string; 
  public get executionTime() {
    return this.getStringAttribute('execution_time');
  }
  public set executionTime(value: string) {
    this._executionTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeInput() {
    return this._executionTime;
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

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // result_content_type - computed: false, optional: false, required: true
  private _resultContentType?: string; 
  public get resultContentType() {
    return this.getStringAttribute('result_content_type');
  }
  public set resultContentType(value: string) {
    this._resultContentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultContentTypeInput() {
    return this._resultContentType;
  }

  // result_data_set - computed: true, optional: false, required: false
  private _resultDataSet = new DataOciApmSyntheticsResultResultDataSetList(this, "result_data_set", false);
  public get resultDataSet() {
    return this._resultDataSet;
  }

  // result_type - computed: false, optional: false, required: true
  private _resultType?: string; 
  public get resultType() {
    return this.getStringAttribute('result_type');
  }
  public set resultType(value: string) {
    this._resultType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultTypeInput() {
    return this._resultType;
  }

  // vantage_point - computed: false, optional: false, required: true
  private _vantagePoint?: string; 
  public get vantagePoint() {
    return this.getStringAttribute('vantage_point');
  }
  public set vantagePoint(value: string) {
    this._vantagePoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vantagePointInput() {
    return this._vantagePoint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      execution_time: cdktf.stringToTerraform(this._executionTime),
      id: cdktf.stringToTerraform(this._id),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      result_content_type: cdktf.stringToTerraform(this._resultContentType),
      result_type: cdktf.stringToTerraform(this._resultType),
      vantage_point: cdktf.stringToTerraform(this._vantagePoint),
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
      execution_time: {
        value: cdktf.stringToHclTerraform(this._executionTime),
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
      monitor_id: {
        value: cdktf.stringToHclTerraform(this._monitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_content_type: {
        value: cdktf.stringToHclTerraform(this._resultContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_type: {
        value: cdktf.stringToHclTerraform(this._resultType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vantage_point: {
        value: cdktf.stringToHclTerraform(this._vantagePoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
