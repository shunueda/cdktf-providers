// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_synthetics_on_premise_vantage_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmSyntheticsOnPremiseVantagePointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_synthetics_on_premise_vantage_point#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoint#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_synthetics_on_premise_vantage_point#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePoint#on_premise_vantage_point_id}
  */
  readonly onPremiseVantagePointId: string;
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capability - computed: true, optional: false, required: false
  public get capability() {
    return this.getStringAttribute('capability');
  }

  // on_premise_vantage_point_count - computed: true, optional: false, required: false
  public get onPremiseVantagePointCount() {
    return this.getNumberAttribute('on_premise_vantage_point_count');
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsOnPremiseVantagePointWorkersSummary {
}

export function dataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryToTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryToHclTerraform(struct?: DataOciApmSyntheticsOnPremiseVantagePointWorkersSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsOnPremiseVantagePointWorkersSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsOnPremiseVantagePointWorkersSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getNumberAttribute('available');
  }

  // available_capabilities - computed: true, optional: false, required: false
  private _availableCapabilities = new DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryAvailableCapabilitiesList(this, "available_capabilities", false);
  public get availableCapabilities() {
    return this._availableCapabilities;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference {
    return new DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_synthetics_on_premise_vantage_point oci_apm_synthetics_on_premise_vantage_point}
*/
export class DataOciApmSyntheticsOnPremiseVantagePoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_on_premise_vantage_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePoint to import
  * @param importFromId The id of the existing DataOciApmSyntheticsOnPremiseVantagePoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_synthetics_on_premise_vantage_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_on_premise_vantage_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/apm_synthetics_on_premise_vantage_point oci_apm_synthetics_on_premise_vantage_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmSyntheticsOnPremiseVantagePointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmSyntheticsOnPremiseVantagePointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_on_premise_vantage_point',
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
    this._onPremiseVantagePointId = config.onPremiseVantagePointId;
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

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_premise_vantage_point_id - computed: false, optional: false, required: true
  private _onPremiseVantagePointId?: string; 
  public get onPremiseVantagePointId() {
    return this.getStringAttribute('on_premise_vantage_point_id');
  }
  public set onPremiseVantagePointId(value: string) {
    this._onPremiseVantagePointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseVantagePointIdInput() {
    return this._onPremiseVantagePointId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // workers_summary - computed: true, optional: false, required: false
  private _workersSummary = new DataOciApmSyntheticsOnPremiseVantagePointWorkersSummaryList(this, "workers_summary", false);
  public get workersSummary() {
    return this._workersSummary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      on_premise_vantage_point_id: cdktf.stringToTerraform(this._onPremiseVantagePointId),
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
      on_premise_vantage_point_id: {
        value: cdktf.stringToHclTerraform(this._onPremiseVantagePointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
