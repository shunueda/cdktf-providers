// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeNodebalancerConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the NodeBalancer to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#nodebalancer_id DataLinodeNodebalancerConfigs#nodebalancer_id}
  */
  readonly nodebalancerId: number;
  /**
  * The order in which results should be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#order DataLinodeNodebalancerConfigs#order}
  */
  readonly order?: string;
  /**
  * The attribute to order the results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#order_by DataLinodeNodebalancerConfigs#order_by}
  */
  readonly orderBy?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#filter DataLinodeNodebalancerConfigs#filter}
  */
  readonly filter?: DataLinodeNodebalancerConfigsFilter[] | cdktf.IResolvable;
}
export interface DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatus {
}

export function dataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusToTerraform(struct?: DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusToHclTerraform(struct?: DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down - computed: true, optional: false, required: false
  public get down() {
    return this.getNumberAttribute('down');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getNumberAttribute('up');
  }
}

export class DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusOutputReference {
    return new DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeNodebalancerConfigsNodebalancerConfigs {
  /**
  * The ID of the NodeBalancer config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#id DataLinodeNodebalancerConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The ID of the NodeBalancer to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#nodebalancer_id DataLinodeNodebalancerConfigs#nodebalancer_id}
  */
  readonly nodebalancerId: number;
}

export function dataLinodeNodebalancerConfigsNodebalancerConfigsToTerraform(struct?: DataLinodeNodebalancerConfigsNodebalancerConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    nodebalancer_id: cdktf.numberToTerraform(struct!.nodebalancerId),
  }
}


export function dataLinodeNodebalancerConfigsNodebalancerConfigsToHclTerraform(struct?: DataLinodeNodebalancerConfigsNodebalancerConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nodebalancer_id: {
      value: cdktf.numberToHclTerraform(struct!.nodebalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeNodebalancerConfigsNodebalancerConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeNodebalancerConfigsNodebalancerConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodebalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodebalancerId = this._nodebalancerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeNodebalancerConfigsNodebalancerConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._nodebalancerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._nodebalancerId = value.nodebalancerId;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getStringAttribute('check');
  }

  // check_attempts - computed: true, optional: false, required: false
  public get checkAttempts() {
    return this.getNumberAttribute('check_attempts');
  }

  // check_body - computed: true, optional: false, required: false
  public get checkBody() {
    return this.getStringAttribute('check_body');
  }

  // check_interval - computed: true, optional: false, required: false
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }

  // check_passive - computed: true, optional: false, required: false
  public get checkPassive() {
    return this.getBooleanAttribute('check_passive');
  }

  // check_path - computed: true, optional: false, required: false
  public get checkPath() {
    return this.getStringAttribute('check_path');
  }

  // check_timeout - computed: true, optional: false, required: false
  public get checkTimeout() {
    return this.getNumberAttribute('check_timeout');
  }

  // cipher_suite - computed: true, optional: false, required: false
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }

  // id - computed: true, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // node_status - computed: true, optional: false, required: false
  private _nodeStatus = new DataLinodeNodebalancerConfigsNodebalancerConfigsNodeStatusList(this, "node_status", false);
  public get nodeStatus() {
    return this._nodeStatus;
  }

  // nodebalancer_id - computed: true, optional: false, required: true
  private _nodebalancerId?: number; 
  public get nodebalancerId() {
    return this.getNumberAttribute('nodebalancer_id');
  }
  public set nodebalancerId(value: number) {
    this._nodebalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerIdInput() {
    return this._nodebalancerId;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy_protocol - computed: true, optional: false, required: false
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }

  // ssl_commonname - computed: true, optional: false, required: false
  public get sslCommonname() {
    return this.getStringAttribute('ssl_commonname');
  }

  // ssl_fingerprint - computed: true, optional: false, required: false
  public get sslFingerprint() {
    return this.getStringAttribute('ssl_fingerprint');
  }

  // stickiness - computed: true, optional: false, required: false
  public get stickiness() {
    return this.getStringAttribute('stickiness');
  }

  // udp_check_port - computed: true, optional: false, required: false
  public get udpCheckPort() {
    return this.getNumberAttribute('udp_check_port');
  }

  // udp_session_timeout - computed: true, optional: false, required: false
  public get udpSessionTimeout() {
    return this.getNumberAttribute('udp_session_timeout');
  }
}

export class DataLinodeNodebalancerConfigsNodebalancerConfigsList extends cdktf.ComplexList {
  public internalValue? : DataLinodeNodebalancerConfigsNodebalancerConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeNodebalancerConfigsNodebalancerConfigsOutputReference {
    return new DataLinodeNodebalancerConfigsNodebalancerConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeNodebalancerConfigsFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#match_by DataLinodeNodebalancerConfigs#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#name DataLinodeNodebalancerConfigs#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#values DataLinodeNodebalancerConfigs#values}
  */
  readonly values: string[];
}

export function dataLinodeNodebalancerConfigsFilterToTerraform(struct?: DataLinodeNodebalancerConfigsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLinodeNodebalancerConfigsFilterToHclTerraform(struct?: DataLinodeNodebalancerConfigsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeNodebalancerConfigsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeNodebalancerConfigsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeNodebalancerConfigsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBy = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBy = value.matchBy;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLinodeNodebalancerConfigsFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeNodebalancerConfigsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeNodebalancerConfigsFilterOutputReference {
    return new DataLinodeNodebalancerConfigsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs linode_nodebalancer_configs}
*/
export class DataLinodeNodebalancerConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_nodebalancer_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeNodebalancerConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeNodebalancerConfigs to import
  * @param importFromId The id of the existing DataLinodeNodebalancerConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeNodebalancerConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_nodebalancer_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/nodebalancer_configs linode_nodebalancer_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeNodebalancerConfigsConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeNodebalancerConfigsConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_nodebalancer_configs',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nodebalancerId = config.nodebalancerId;
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nodebalancer_configs - computed: true, optional: false, required: false
  private _nodebalancerConfigs = new DataLinodeNodebalancerConfigsNodebalancerConfigsList(this, "nodebalancer_configs", false);
  public get nodebalancerConfigs() {
    return this._nodebalancerConfigs;
  }

  // nodebalancer_id - computed: false, optional: false, required: true
  private _nodebalancerId?: number; 
  public get nodebalancerId() {
    return this.getNumberAttribute('nodebalancer_id');
  }
  public set nodebalancerId(value: number) {
    this._nodebalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerIdInput() {
    return this._nodebalancerId;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeNodebalancerConfigsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeNodebalancerConfigsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nodebalancer_id: cdktf.numberToTerraform(this._nodebalancerId),
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      filter: cdktf.listMapper(dataLinodeNodebalancerConfigsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nodebalancer_id: {
        value: cdktf.numberToHclTerraform(this._nodebalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataLinodeNodebalancerConfigsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeNodebalancerConfigsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
