// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaApplicationSegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#id DataZpaApplicationSegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#is_incomplete_dr_config DataZpaApplicationSegment#is_incomplete_dr_config}
  */
  readonly isIncompleteDrConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#microtenant_id DataZpaApplicationSegment#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#microtenant_name DataZpaApplicationSegment#microtenant_name}
  */
  readonly microtenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#name DataZpaApplicationSegment#name}
  */
  readonly name?: string;
  /**
  * tcp_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#tcp_port_range DataZpaApplicationSegment#tcp_port_range}
  */
  readonly tcpPortRange?: DataZpaApplicationSegmentTcpPortRange[] | cdktf.IResolvable;
  /**
  * udp_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#udp_port_range DataZpaApplicationSegment#udp_port_range}
  */
  readonly udpPortRange?: DataZpaApplicationSegmentUdpPortRange[] | cdktf.IResolvable;
}
export interface DataZpaApplicationSegmentServerGroups {
}

export function dataZpaApplicationSegmentServerGroupsToTerraform(struct?: DataZpaApplicationSegmentServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaApplicationSegmentServerGroupsToHclTerraform(struct?: DataZpaApplicationSegmentServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaApplicationSegmentServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getListAttribute('id');
  }
}

export class DataZpaApplicationSegmentServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaApplicationSegmentServerGroupsOutputReference {
    return new DataZpaApplicationSegmentServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaApplicationSegmentTcpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#from DataZpaApplicationSegment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#to DataZpaApplicationSegment#to}
  */
  readonly to?: string;
}

export function dataZpaApplicationSegmentTcpPortRangeToTerraform(struct?: DataZpaApplicationSegmentTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataZpaApplicationSegmentTcpPortRangeToHclTerraform(struct?: DataZpaApplicationSegmentTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZpaApplicationSegmentTcpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentTcpPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentTcpPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataZpaApplicationSegmentTcpPortRangeList extends cdktf.ComplexList {
  public internalValue? : DataZpaApplicationSegmentTcpPortRange[] | cdktf.IResolvable

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
  public get(index: number): DataZpaApplicationSegmentTcpPortRangeOutputReference {
    return new DataZpaApplicationSegmentTcpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaApplicationSegmentUdpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#from DataZpaApplicationSegment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#to DataZpaApplicationSegment#to}
  */
  readonly to?: string;
}

export function dataZpaApplicationSegmentUdpPortRangeToTerraform(struct?: DataZpaApplicationSegmentUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataZpaApplicationSegmentUdpPortRangeToHclTerraform(struct?: DataZpaApplicationSegmentUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZpaApplicationSegmentUdpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentUdpPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentUdpPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataZpaApplicationSegmentUdpPortRangeList extends cdktf.ComplexList {
  public internalValue? : DataZpaApplicationSegmentUdpPortRange[] | cdktf.IResolvable

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
  public get(index: number): DataZpaApplicationSegmentUdpPortRangeOutputReference {
    return new DataZpaApplicationSegmentUdpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment zpa_application_segment}
*/
export class DataZpaApplicationSegment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaApplicationSegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaApplicationSegment to import
  * @param importFromId The id of the existing DataZpaApplicationSegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaApplicationSegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/data-sources/application_segment zpa_application_segment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaApplicationSegmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaApplicationSegmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
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
    this._isIncompleteDrConfig = config.isIncompleteDrConfig;
    this._microtenantId = config.microtenantId;
    this._microtenantName = config.microtenantName;
    this._name = config.name;
    this._tcpPortRange.internalValue = config.tcpPortRange;
    this._udpPortRange.internalValue = config.udpPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_protection_enabled - computed: true, optional: false, required: false
  public get apiProtectionEnabled() {
    return this.getBooleanAttribute('api_protection_enabled');
  }

  // bypass_type - computed: true, optional: false, required: false
  public get bypassType() {
    return this.getStringAttribute('bypass_type');
  }

  // config_space - computed: true, optional: false, required: false
  public get configSpace() {
    return this.getStringAttribute('config_space');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // default_idle_timeout - computed: true, optional: false, required: false
  public get defaultIdleTimeout() {
    return this.getStringAttribute('default_idle_timeout');
  }

  // default_max_age - computed: true, optional: false, required: false
  public get defaultMaxAge() {
    return this.getStringAttribute('default_max_age');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }

  // double_encrypt - computed: true, optional: false, required: false
  public get doubleEncrypt() {
    return this.getBooleanAttribute('double_encrypt');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // health_reporting - computed: true, optional: false, required: false
  public get healthReporting() {
    return this.getStringAttribute('health_reporting');
  }

  // id - computed: false, optional: true, required: false
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

  // ip_anchored - computed: true, optional: false, required: false
  public get ipAnchored() {
    return this.getBooleanAttribute('ip_anchored');
  }

  // is_cname_enabled - computed: true, optional: false, required: false
  public get isCnameEnabled() {
    return this.getBooleanAttribute('is_cname_enabled');
  }

  // is_incomplete_dr_config - computed: true, optional: true, required: false
  private _isIncompleteDrConfig?: boolean | cdktf.IResolvable; 
  public get isIncompleteDrConfig() {
    return this.getBooleanAttribute('is_incomplete_dr_config');
  }
  public set isIncompleteDrConfig(value: boolean | cdktf.IResolvable) {
    this._isIncompleteDrConfig = value;
  }
  public resetIsIncompleteDrConfig() {
    this._isIncompleteDrConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncompleteDrConfigInput() {
    return this._isIncompleteDrConfig;
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // microtenant_name - computed: false, optional: true, required: false
  private _microtenantName?: string; 
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }
  public set microtenantName(value: string) {
    this._microtenantName = value;
  }
  public resetMicrotenantName() {
    this._microtenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantNameInput() {
    return this._microtenantName;
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // modifiedby - computed: true, optional: false, required: false
  public get modifiedby() {
    return this.getStringAttribute('modifiedby');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // passive_health_enabled - computed: true, optional: false, required: false
  public get passiveHealthEnabled() {
    return this.getBooleanAttribute('passive_health_enabled');
  }

  // segment_group_id - computed: true, optional: false, required: false
  public get segmentGroupId() {
    return this.getStringAttribute('segment_group_id');
  }

  // segment_group_name - computed: true, optional: false, required: false
  public get segmentGroupName() {
    return this.getStringAttribute('segment_group_name');
  }

  // select_connector_close_to_app - computed: true, optional: false, required: false
  public get selectConnectorCloseToApp() {
    return this.getBooleanAttribute('select_connector_close_to_app');
  }

  // server_groups - computed: true, optional: false, required: false
  private _serverGroups = new DataZpaApplicationSegmentServerGroupsList(this, "server_groups", true);
  public get serverGroups() {
    return this._serverGroups;
  }

  // tcp_port_ranges - computed: true, optional: false, required: false
  public get tcpPortRanges() {
    return this.getListAttribute('tcp_port_ranges');
  }

  // udp_port_ranges - computed: true, optional: false, required: false
  public get udpPortRanges() {
    return this.getListAttribute('udp_port_ranges');
  }

  // use_in_dr_mode - computed: true, optional: false, required: false
  public get useInDrMode() {
    return this.getBooleanAttribute('use_in_dr_mode');
  }

  // tcp_port_range - computed: false, optional: true, required: false
  private _tcpPortRange = new DataZpaApplicationSegmentTcpPortRangeList(this, "tcp_port_range", true);
  public get tcpPortRange() {
    return this._tcpPortRange;
  }
  public putTcpPortRange(value: DataZpaApplicationSegmentTcpPortRange[] | cdktf.IResolvable) {
    this._tcpPortRange.internalValue = value;
  }
  public resetTcpPortRange() {
    this._tcpPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeInput() {
    return this._tcpPortRange.internalValue;
  }

  // udp_port_range - computed: false, optional: true, required: false
  private _udpPortRange = new DataZpaApplicationSegmentUdpPortRangeList(this, "udp_port_range", true);
  public get udpPortRange() {
    return this._udpPortRange;
  }
  public putUdpPortRange(value: DataZpaApplicationSegmentUdpPortRange[] | cdktf.IResolvable) {
    this._udpPortRange.internalValue = value;
  }
  public resetUdpPortRange() {
    this._udpPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeInput() {
    return this._udpPortRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_incomplete_dr_config: cdktf.booleanToTerraform(this._isIncompleteDrConfig),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      microtenant_name: cdktf.stringToTerraform(this._microtenantName),
      name: cdktf.stringToTerraform(this._name),
      tcp_port_range: cdktf.listMapper(dataZpaApplicationSegmentTcpPortRangeToTerraform, true)(this._tcpPortRange.internalValue),
      udp_port_range: cdktf.listMapper(dataZpaApplicationSegmentUdpPortRangeToTerraform, true)(this._udpPortRange.internalValue),
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
      is_incomplete_dr_config: {
        value: cdktf.booleanToHclTerraform(this._isIncompleteDrConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_name: {
        value: cdktf.stringToHclTerraform(this._microtenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_port_range: {
        value: cdktf.listMapperHcl(dataZpaApplicationSegmentTcpPortRangeToHclTerraform, true)(this._tcpPortRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZpaApplicationSegmentTcpPortRangeList",
      },
      udp_port_range: {
        value: cdktf.listMapperHcl(dataZpaApplicationSegmentUdpPortRangeToHclTerraform, true)(this._udpPortRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZpaApplicationSegmentUdpPortRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
