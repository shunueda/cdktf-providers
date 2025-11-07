// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxvFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway name in which the firewall rule is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule#edge_gateway DataVcdNsxvFirewallRule#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule#id DataVcdNsxvFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule#org DataVcdNsxvFirewallRule#org}
  */
  readonly org?: string;
  /**
  * Firewall rule ID for lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule#rule_id DataVcdNsxvFirewallRule#rule_id}
  */
  readonly ruleId: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule#vdc DataVcdNsxvFirewallRule#vdc}
  */
  readonly vdc?: string;
}
export interface DataVcdNsxvFirewallRuleDestination {
}

export function dataVcdNsxvFirewallRuleDestinationToTerraform(struct?: DataVcdNsxvFirewallRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxvFirewallRuleDestinationToHclTerraform(struct?: DataVcdNsxvFirewallRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxvFirewallRuleDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxvFirewallRuleDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxvFirewallRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }

  // gateway_interfaces - computed: true, optional: false, required: false
  public get gatewayInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_interfaces'));
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }

  // ip_sets - computed: true, optional: false, required: false
  public get ipSets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_sets'));
  }

  // org_networks - computed: true, optional: false, required: false
  public get orgNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('org_networks'));
  }

  // vm_ids - computed: true, optional: false, required: false
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
}

export class DataVcdNsxvFirewallRuleDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxvFirewallRuleDestinationOutputReference {
    return new DataVcdNsxvFirewallRuleDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxvFirewallRuleService {
}

export function dataVcdNsxvFirewallRuleServiceToTerraform(struct?: DataVcdNsxvFirewallRuleService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxvFirewallRuleServiceToHclTerraform(struct?: DataVcdNsxvFirewallRuleService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxvFirewallRuleServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxvFirewallRuleService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxvFirewallRuleService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}

export class DataVcdNsxvFirewallRuleServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxvFirewallRuleServiceOutputReference {
    return new DataVcdNsxvFirewallRuleServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxvFirewallRuleSource {
}

export function dataVcdNsxvFirewallRuleSourceToTerraform(struct?: DataVcdNsxvFirewallRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxvFirewallRuleSourceToHclTerraform(struct?: DataVcdNsxvFirewallRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxvFirewallRuleSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxvFirewallRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxvFirewallRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }

  // gateway_interfaces - computed: true, optional: false, required: false
  public get gatewayInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_interfaces'));
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }

  // ip_sets - computed: true, optional: false, required: false
  public get ipSets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_sets'));
  }

  // org_networks - computed: true, optional: false, required: false
  public get orgNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('org_networks'));
  }

  // vm_ids - computed: true, optional: false, required: false
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
}

export class DataVcdNsxvFirewallRuleSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxvFirewallRuleSourceOutputReference {
    return new DataVcdNsxvFirewallRuleSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule vcd_nsxv_firewall_rule}
*/
export class DataVcdNsxvFirewallRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxv_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxvFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxvFirewallRule to import
  * @param importFromId The id of the existing DataVcdNsxvFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxvFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxv_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxv_firewall_rule vcd_nsxv_firewall_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxvFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxvFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxv_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGateway = config.edgeGateway;
    this._id = config.id;
    this._org = config.org;
    this._ruleId = config.ruleId;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataVcdNsxvFirewallRuleDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // logging_enabled - computed: true, optional: false, required: false
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_tag - computed: true, optional: false, required: false
  public get ruleTag() {
    return this.getNumberAttribute('rule_tag');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataVcdNsxvFirewallRuleServiceList(this, "service", true);
  public get service() {
    return this._service;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataVcdNsxvFirewallRuleSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
