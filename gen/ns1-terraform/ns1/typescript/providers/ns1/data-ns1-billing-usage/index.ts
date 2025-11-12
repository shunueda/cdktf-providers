// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNs1BillingUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage#from DataNs1BillingUsage#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage#id DataNs1BillingUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage#metric_type DataNs1BillingUsage#metric_type}
  */
  readonly metricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage#to DataNs1BillingUsage#to}
  */
  readonly to?: number;
}
export interface DataNs1BillingUsageByNetworkDaily {
}

export function dataNs1BillingUsageByNetworkDailyToTerraform(struct?: DataNs1BillingUsageByNetworkDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNs1BillingUsageByNetworkDailyToHclTerraform(struct?: DataNs1BillingUsageByNetworkDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNs1BillingUsageByNetworkDailyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNs1BillingUsageByNetworkDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNs1BillingUsageByNetworkDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clean_queries - computed: true, optional: false, required: false
  public get cleanQueries() {
    return this.getNumberAttribute('clean_queries');
  }

  // ddos_queries - computed: true, optional: false, required: false
  public get ddosQueries() {
    return this.getNumberAttribute('ddos_queries');
  }

  // nxd_responses - computed: true, optional: false, required: false
  public get nxdResponses() {
    return this.getNumberAttribute('nxd_responses');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class DataNs1BillingUsageByNetworkDailyList extends cdktf.ComplexList {

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
  public get(index: number): DataNs1BillingUsageByNetworkDailyOutputReference {
    return new DataNs1BillingUsageByNetworkDailyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNs1BillingUsageByNetwork {
}

export function dataNs1BillingUsageByNetworkToTerraform(struct?: DataNs1BillingUsageByNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNs1BillingUsageByNetworkToHclTerraform(struct?: DataNs1BillingUsageByNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNs1BillingUsageByNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNs1BillingUsageByNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNs1BillingUsageByNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billable_queries - computed: true, optional: false, required: false
  public get billableQueries() {
    return this.getNumberAttribute('billable_queries');
  }

  // clean_queries - computed: true, optional: false, required: false
  public get cleanQueries() {
    return this.getNumberAttribute('clean_queries');
  }

  // daily - computed: true, optional: false, required: false
  private _daily = new DataNs1BillingUsageByNetworkDailyList(this, "daily", false);
  public get daily() {
    return this._daily;
  }

  // ddos_queries - computed: true, optional: false, required: false
  public get ddosQueries() {
    return this.getNumberAttribute('ddos_queries');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getNumberAttribute('network');
  }

  // nxd_responses - computed: true, optional: false, required: false
  public get nxdResponses() {
    return this.getNumberAttribute('nxd_responses');
  }
}

export class DataNs1BillingUsageByNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataNs1BillingUsageByNetworkOutputReference {
    return new DataNs1BillingUsageByNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage ns1_billing_usage}
*/
export class DataNs1BillingUsage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_billing_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNs1BillingUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNs1BillingUsage to import
  * @param importFromId The id of the existing DataNs1BillingUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNs1BillingUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_billing_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/billing_usage ns1_billing_usage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNs1BillingUsageConfig
  */
  public constructor(scope: Construct, id: string, config: DataNs1BillingUsageConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_billing_usage',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._from = config.from;
    this._id = config.id;
    this._metricType = config.metricType;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // by_network - computed: true, optional: false, required: false
  private _byNetwork = new DataNs1BillingUsageByNetworkList(this, "by_network", false);
  public get byNetwork() {
    return this._byNetwork;
  }

  // china_queries_limit - computed: true, optional: false, required: false
  public get chinaQueriesLimit() {
    return this.getNumberAttribute('china_queries_limit');
  }

  // clean_queries - computed: true, optional: false, required: false
  public get cleanQueries() {
    return this.getNumberAttribute('clean_queries');
  }

  // ddos_protection_enabled - computed: true, optional: false, required: false
  public get ddosProtectionEnabled() {
    return this.getBooleanAttribute('ddos_protection_enabled');
  }

  // ddos_queries - computed: true, optional: false, required: false
  public get ddosQueries() {
    return this.getNumberAttribute('ddos_queries');
  }

  // decisions_limit - computed: true, optional: false, required: false
  public get decisionsLimit() {
    return this.getNumberAttribute('decisions_limit');
  }

  // filter_chains_limit - computed: true, optional: false, required: false
  public get filterChainsLimit() {
    return this.getNumberAttribute('filter_chains_limit');
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // include_dedicated_dns_network_in_managed_dns_usage - computed: true, optional: false, required: false
  public get includeDedicatedDnsNetworkInManagedDnsUsage() {
    return this.getBooleanAttribute('include_dedicated_dns_network_in_managed_dns_usage');
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // monitors_limit - computed: true, optional: false, required: false
  public get monitorsLimit() {
    return this.getNumberAttribute('monitors_limit');
  }

  // nxd_protection_enabled - computed: true, optional: false, required: false
  public get nxdProtectionEnabled() {
    return this.getBooleanAttribute('nxd_protection_enabled');
  }

  // nxd_responses - computed: true, optional: false, required: false
  public get nxdResponses() {
    return this.getNumberAttribute('nxd_responses');
  }

  // queries_limit - computed: true, optional: false, required: false
  public get queriesLimit() {
    return this.getNumberAttribute('queries_limit');
  }

  // records_limit - computed: true, optional: false, required: false
  public get recordsLimit() {
    return this.getNumberAttribute('records_limit');
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // total_usage - computed: true, optional: false, required: false
  public get totalUsage() {
    return this.getNumberAttribute('total_usage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      from: cdktf.numberToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      metric_type: cdktf.stringToTerraform(this._metricType),
      to: cdktf.numberToTerraform(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      from: {
        value: cdktf.numberToHclTerraform(this._from),
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
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.numberToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
