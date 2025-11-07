// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraBlueprintAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_anomalies#blueprint_id DataApstraBlueprintAnomalies#blueprint_id}
  */
  readonly blueprintId: string;
}
export interface DataApstraBlueprintAnomaliesDetails {
}

export function dataApstraBlueprintAnomaliesDetailsToTerraform(struct?: DataApstraBlueprintAnomaliesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraBlueprintAnomaliesDetailsToHclTerraform(struct?: DataApstraBlueprintAnomaliesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraBlueprintAnomaliesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraBlueprintAnomaliesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraBlueprintAnomaliesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual - computed: true, optional: false, required: false
  public get actual() {
    return this.getStringAttribute('actual');
  }

  // anomalous - computed: true, optional: false, required: false
  public get anomalous() {
    return this.getStringAttribute('anomalous');
  }

  // anomaly_id - computed: true, optional: false, required: false
  public get anomalyId() {
    return this.getStringAttribute('anomaly_id');
  }

  // expected - computed: true, optional: false, required: false
  public get expected() {
    return this.getStringAttribute('expected');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataApstraBlueprintAnomaliesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraBlueprintAnomaliesDetailsOutputReference {
    return new DataApstraBlueprintAnomaliesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraBlueprintAnomaliesSummaryByNode {
}

export function dataApstraBlueprintAnomaliesSummaryByNodeToTerraform(struct?: DataApstraBlueprintAnomaliesSummaryByNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraBlueprintAnomaliesSummaryByNodeToHclTerraform(struct?: DataApstraBlueprintAnomaliesSummaryByNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraBlueprintAnomaliesSummaryByNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraBlueprintAnomaliesSummaryByNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraBlueprintAnomaliesSummaryByNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp - computed: true, optional: false, required: false
  public get arp() {
    return this.getNumberAttribute('arp');
  }

  // bgp - computed: true, optional: false, required: false
  public get bgp() {
    return this.getNumberAttribute('bgp');
  }

  // blueprint_rendering - computed: true, optional: false, required: false
  public get blueprintRendering() {
    return this.getNumberAttribute('blueprint_rendering');
  }

  // cabling - computed: true, optional: false, required: false
  public get cabling() {
    return this.getNumberAttribute('cabling');
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getNumberAttribute('config');
  }

  // counter - computed: true, optional: false, required: false
  public get counter() {
    return this.getNumberAttribute('counter');
  }

  // deployment - computed: true, optional: false, required: false
  public get deployment() {
    return this.getNumberAttribute('deployment');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getNumberAttribute('hostname');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getNumberAttribute('interface');
  }

  // lag - computed: true, optional: false, required: false
  public get lag() {
    return this.getNumberAttribute('lag');
  }

  // liveness - computed: true, optional: false, required: false
  public get liveness() {
    return this.getNumberAttribute('liveness');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getNumberAttribute('mac');
  }

  // mlag - computed: true, optional: false, required: false
  public get mlag() {
    return this.getNumberAttribute('mlag');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // probe - computed: true, optional: false, required: false
  public get probe() {
    return this.getNumberAttribute('probe');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getNumberAttribute('route');
  }

  // series - computed: true, optional: false, required: false
  public get series() {
    return this.getNumberAttribute('series');
  }

  // streaming - computed: true, optional: false, required: false
  public get streaming() {
    return this.getNumberAttribute('streaming');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataApstraBlueprintAnomaliesSummaryByNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraBlueprintAnomaliesSummaryByNodeOutputReference {
    return new DataApstraBlueprintAnomaliesSummaryByNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraBlueprintAnomaliesSummaryByService {
}

export function dataApstraBlueprintAnomaliesSummaryByServiceToTerraform(struct?: DataApstraBlueprintAnomaliesSummaryByService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraBlueprintAnomaliesSummaryByServiceToHclTerraform(struct?: DataApstraBlueprintAnomaliesSummaryByService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraBlueprintAnomaliesSummaryByServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraBlueprintAnomaliesSummaryByService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraBlueprintAnomaliesSummaryByService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataApstraBlueprintAnomaliesSummaryByServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraBlueprintAnomaliesSummaryByServiceOutputReference {
    return new DataApstraBlueprintAnomaliesSummaryByServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_anomalies apstra_blueprint_anomalies}
*/
export class DataApstraBlueprintAnomalies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_blueprint_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraBlueprintAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraBlueprintAnomalies to import
  * @param importFromId The id of the existing DataApstraBlueprintAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraBlueprintAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_blueprint_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_anomalies apstra_blueprint_anomalies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraBlueprintAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraBlueprintAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_blueprint_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataApstraBlueprintAnomaliesDetailsList(this, "details", true);
  public get details() {
    return this._details;
  }

  // summary_by_node - computed: true, optional: false, required: false
  private _summaryByNode = new DataApstraBlueprintAnomaliesSummaryByNodeList(this, "summary_by_node", true);
  public get summaryByNode() {
    return this._summaryByNode;
  }

  // summary_by_service - computed: true, optional: false, required: false
  private _summaryByService = new DataApstraBlueprintAnomaliesSummaryByServiceList(this, "summary_by_service", true);
  public get summaryByService() {
    return this._summaryByService;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
